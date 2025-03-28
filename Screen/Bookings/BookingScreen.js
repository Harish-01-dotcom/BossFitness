import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

export default function BookingScreen() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({});
  const [activeTab, setActiveTab] = useState('Booking');

  const categories = ['Cardio', 'Yoga', 'Zumba'];
  const availableTimeSlots = [
    '10:00 AM - 11:00 AM',
    '11:30 AM - 12:30 PM',
    '1:00 PM - 2.00 PM',
    '2:00 PM - 3:00 PM',
    '4:00 PM - 5:00 PM',
    '5:30 PM - 6:30 PM',
    '7:00 PM - 8.00PM',
  ];

  const getAvailableSlots = () => {
    const formattedDate = date.toDateString();
    const bookedForDate = bookedSlots[formattedDate] || {};
    const bookedTimes = new Set(Object.values(bookedForDate).flat());
    const now = new Date();

    return availableTimeSlots.map(slot => {
      const [startTime] = slot.split(' - ');
      const slotDateTime = new Date(date);

      const [time, modifier] = startTime.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      if (modifier === 'PM' && hours < 12) {
        hours += 12;
      }
      if (modifier === 'AM' && hours === 12) {
        hours = 0;
      }
      slotDateTime.setHours(hours, minutes, 0, 0);

      const isToday = date.toDateString() === now.toDateString();
      const isPast = isToday && slotDateTime <= now;
      const isBooked = bookedTimes.has(slot);
      const timeUntil = Math.floor((slotDateTime - now) / 60000);

      return {
        label: slot,
        disabled: isPast || isBooked,
        startsIn: !isPast ? timeUntil : null,
      };
    });
  };

  const handleConfirmBooking = category => {
    if (!selectedSlots[category]) {
      Alert.alert('Error', 'Please select a time slot!');
      return;
    }

    const formattedDate = date.toDateString();
    const selectedSlot = selectedSlots[category];

    setBookedSlots(prev => {
      const updated = {...prev};
      if (!updated[formattedDate]) {
        updated[formattedDate] = {};
      }
      if (!updated[formattedDate][category]) {
        updated[formattedDate][category] = [];
      }
      updated[formattedDate][category].push(selectedSlot);
      return updated;
    });

    setBookingConfirmed(true);
    setSelectedSlots(prev => ({...prev, [category]: null}));
  };

  const handleDeleteSlot = (bookedDate, category, slotIndex) => {
    setBookedSlots(prev => {
      const updated = {...prev};
      updated[bookedDate][category].splice(slotIndex, 1);
      if (updated[bookedDate][category].length === 0) {
        delete updated[bookedDate][category];
      }
      if (Object.keys(updated[bookedDate]).length === 0) {
        delete updated[bookedDate];
      }
      return updated;
    });
  };

  const renderBookingTab = () => (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.dateButtonText}>
            📅 Select Date: {date.toDateString()}
          </Text>
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}

      {categories.map(category => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.slotTitle}>{category} Slots:</Text>
          <View style={styles.slotContainer}>
            {getAvailableSlots().map((slotObj, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slotButton,
                  selectedSlots[category] === slotObj.label &&
                    !slotObj.disabled &&
                    styles.selectedSlot,
                  slotObj.disabled && styles.disabledSlot,
                ]}
                onPress={() => {
                  if (!slotObj.disabled) {
                    setSelectedSlots(prev => ({
                      ...prev,
                      [category]: slotObj.label,
                    }));
                  }
                }}
                disabled={slotObj.disabled}>
                <Text
                  style={[
                    styles.slotText,
                    slotObj.disabled && {color: '#999'},
                  ]}>
                  {slotObj.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => handleConfirmBooking(category)}>
            <Text style={styles.confirmButtonText}>Book {category}</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal visible={bookingConfirmed} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Booking Confirmed! 🎉</Text>
            <Text style={styles.modalDetails}>Date: {date.toDateString()}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setBookingConfirmed(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );

  const renderBookedTab = () => (
    <ScrollView style={{padding: 15}}>
      <Text style={styles.bookedSlotsTitle}>Your Booked Appointments</Text>
      {Object.entries(bookedSlots).length === 0 ? (
        <Text style={styles.noBookings}>
          You haven't booked any sessions yet.
        </Text>
      ) : (
        Object.entries(bookedSlots).map(([bookedDate, slotsByCategory], i) => (
          <View key={i} style={styles.bookingCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardDate}>📅 {bookedDate}</Text>
            </View>
            {Object.entries(slotsByCategory).map(([category, slots]) => (
              <View key={category} style={styles.categoryBlock}>
                <Text
                  style={[
                    styles.categoryLabel,
                    styles[`categoryColor_${category.toLowerCase()}`],
                  ]}>
                  {category}
                </Text>
                {slots.map((slot, index) => (
                  <View key={index} style={styles.slotRow}>
                    <Text style={styles.slotTime}>{slot}</Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() =>
                        handleDeleteSlot(bookedDate, category, index)
                      }>
                      <Text style={styles.deleteText}>❌</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))
      )}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../images/logo.png')} />
      </View>

      <View style={styles.tabBar}>
        {['Booking', 'Booked'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'Booking' ? renderBookingTab() : renderBookedTab()}
    </SafeAreaView>
  );
}
