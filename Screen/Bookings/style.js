import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    backgroundColor: '#000',
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
  },

  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },

  activeTab: {
    borderBottomColor: '#FF5733',
  },

  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ccc',
  },

  activeTabText: {
    color: '#fff',
  },

  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },

  dateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  categoryContainer: {
    marginBottom: 25,
  },

  slotTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  slotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },

  slotButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '41%',
  },

  selectedSlot: {
    backgroundColor: '#FF5733',
  },

  slotText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  confirmButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10, // ↓ Reduced height
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 15,
    minWidth: 200, // Optional: reduce if it's too wide
  },

  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalDetails: {
    fontSize: 16,
    marginBottom: 20,
  },

  modalButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  //  Booked Tab Styles
  bookedSlotsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },

  noBookings: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },

  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  categoryBlock: {
    marginBottom: 10,
  },

  categoryLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 6,
  },

  categoryColor_cardio: {
    color: '#1E90FF',
  },

  categoryColor_yoga: {
    color: '#32CD32',
  },

  categoryColor_zumba: {
    color: '#FF8C00',
  },

  slotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
  },

  slotTime: {
    fontSize: 14,
    color: '#555',
  },

  deleteButton: {
    padding: 6,
  },

  deleteText: {
    fontSize: 18,
    color: '#e74c3c',
  },
  disabledSlot: {
    backgroundColor: '#e6e6e6',
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default styles;
