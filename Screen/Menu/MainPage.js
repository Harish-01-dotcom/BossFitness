import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookingScreen from '../Bookings/BookingScreen';
import AccountScreen from '../Account/AccountScreen';
import styles from './style';

const cardioExercises = [
  {
    name: 'Running',
    minutes: 30,
    calories: 300,
    image: require('../../images/running.png'),
    benefit:
      'Improves cardiovascular endurance, strengthens leg muscles, and burns fat efficiently.',
  },
  {
    name: 'Cycling',
    minutes: 45,
    calories: 400,
    image: require('../../images/cycling.png'),
    benefit:
      'Enhances joint mobility, boosts lower body strength, and increases stamina.',
  },
  {
    name: 'Jump Rope',
    minutes: 20,
    calories: 250,
    image: require('../../images/jumprope.png'),
    benefit:
      'Improves coordination, burns calories quickly, and increases agility and balance.',
  },
  {
    name: 'Rowing Machine',
    minutes: 25,
    calories: 280,
    image: require('../../images/rowing.png'),
    benefit:
      'Full-body workout that strengthens back, arms, and legs while improving heart health.',
  },
  {
    name: 'Elliptical Trainer',
    minutes: 30,
    calories: 320,
    image: require('../../images/elliptical.png'),
    benefit:
      'Low-impact cardio that protects joints while toning muscles and enhancing endurance.',
  },
];

const strengthWorkouts = [
  {
    name: 'Chest',
    image: require('../../images/chest.png'),
    benefit:
      'Strengthens the pectoral muscles, improves posture and upper body strength.',
  },
  {
    name: 'Triceps',
    image: require('../../images/triceps.png'),
    benefit: 'Enhances arm stability and improves pushing strength.',
  },
  {
    name: 'Biceps',
    image: require('../../images/biceps.png'),
    benefit: 'Improves pulling strength and arm aesthetics.',
  },
  {
    name: 'Lats',
    image: require('../../images/lats.png'),
    benefit: 'Develops back width and contributes to better posture.',
  },
  {
    name: 'Shoulder',
    image: require('../../images/shoulder.png'),
    benefit:
      'Increases shoulder strength, enhances upper body balance and range of motion.',
  },
  {
    name: 'Leg',
    image: require('../../images/leg.png'),
    benefit:
      'Builds lower body strength, boosts metabolism, and stabilizes core.',
  },
  {
    name: 'Forearm',
    image: require('../../images/forearm.png'),
    benefit: 'Improves grip strength and aids in daily tasks and lifts.',
  },
];

const weeklyPlan = [
  {
    day: 'Monday',
    focus: 'Chest + Triceps',
    workouts: [
      {name: 'Bench Press', sets: 4, reps: 10},
      {name: 'Incline Press', sets: 3, reps: 12},
      {name: 'Push-ups', sets: 3, reps: 20},
      {name: 'Tricep Dips', sets: 3, reps: 15},
    ],
  },
  {
    day: 'Tuesday',
    focus: 'Back + Biceps',
    workouts: [
      {name: 'Pull-ups', sets: 3, reps: 10},
      {name: 'Barbell Rows', sets: 4, reps: 12},
      {name: 'Lat Pulldown', sets: 3, reps: 12},
      {name: 'Bicep Curls', sets: 3, reps: 15},
    ],
  },
  {
    day: 'Wednesday',
    focus: 'Legs',
    workouts: [
      {name: 'Squats', sets: 4, reps: 12},
      {name: 'Lunges', sets: 3, reps: 12},
      {name: 'Leg Press', sets: 3, reps: 15},
      {name: 'Calf Raises', sets: 4, reps: 20},
    ],
  },
  {
    day: 'Thursday',
    focus: 'Shoulders',
    workouts: [
      {name: 'Overhead Press', sets: 4, reps: 10},
      {name: 'Lateral Raises', sets: 3, reps: 15},
      {name: 'Front Raises', sets: 3, reps: 15},
      {name: 'Shrugs', sets: 3, reps: 20},
    ],
  },
  {
    day: 'Friday',
    focus: 'Core',
    workouts: [
      {name: 'Planks', sets: 3, reps: '60 sec'},
      {name: 'Crunches', sets: 3, reps: 20},
      {name: 'Leg Raises', sets: 3, reps: 15},
      {name: 'Russian Twists', sets: 3, reps: 30},
    ],
  },
  {
    day: 'Saturday',
    focus: 'Full Body HIIT',
    workouts: [
      {name: 'Burpees', sets: 3, reps: 15},
      {name: 'Mountain Climbers', sets: 3, reps: 30},
      {name: 'Jump Squats', sets: 3, reps: 20},
      {name: 'High Knees', sets: 3, reps: '45 sec'},
    ],
  },
  {
    day: 'Sunday',
    focus: 'Rest',
    workouts: [
      {name: 'Active Recovery', sets: 1, reps: '15 min'},
      {name: 'Stretching', sets: 1, reps: '15 min'},
      {name: 'Foam Rolling', sets: 1, reps: '15 min'},
    ],
  },
];

const CardioPage = () => (
  <ScrollView style={styles.body}>
    {cardioExercises.map((exercise, index) => (
      <View key={index} style={styles.boxFull}>
        <Image source={exercise.image} style={styles.exerciseImage} />
        <Text style={styles.boxText}>{exercise.name}</Text>
        <Text style={styles.infoText}>Duration: {exercise.minutes} mins</Text>
        <Text style={styles.infoText}>
          Calories burned: {exercise.calories}
        </Text>
        <Text style={styles.planText}>{exercise.benefit}</Text>
      </View>
    ))}
  </ScrollView>
);

const StrengthPage = () => (
  <ScrollView style={styles.body}>
    {strengthWorkouts.map((muscle, index) => (
      <View key={index} style={styles.boxFull}>
        <Image source={muscle.image} style={styles.exerciseImage} />
        <Text style={styles.boxText}>{muscle.name}</Text>
        <Text style={styles.planText}>{muscle.benefit}</Text>
      </View>
    ))}
  </ScrollView>
);

const DietPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [plan, setPlan] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w && h) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setPlan('High-calorie, protein-rich diet.');
      } else if (bmiValue < 25) {
        setPlan('Balanced diet with moderate carbs, proteins and fats.');
      } else {
        setPlan('Low-carb, high-protein diet with lots of vegetables.');
      }
    }
  };

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.infoText}>Enter Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Text style={styles.infoText}>Enter Height (cm):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi && (
        <View style={styles.resultBox}>
          <Text style={styles.infoText}>Your BMI: {bmi}</Text>
          <Text style={styles.infoText}>Suggested Diet Plan:</Text>
          <Text style={styles.planText}>{plan}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const WorkoutPlanPage = () => (
  <ScrollView style={styles.body}>
    {weeklyPlan.map((item, index) => (
      <View key={index} style={styles.workoutDayBox}>
        <Text style={styles.workoutDay}>{item.day}</Text>
        <Text style={styles.workoutFocus}>Focus: {item.focus}</Text>
        {item.workouts.map((workout, i) => (
          <View key={i} style={styles.workoutItem}>
            <Text style={styles.workoutName}>• {workout.name}</Text>
            <Text style={styles.setsReps}>
              Sets: {workout.sets} | Reps: {workout.reps}
            </Text>
          </View>
        ))}
      </View>
    ))}
  </ScrollView>
);

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Cardio');

  const renderTab = () => {
    if (activeTab === 'Cardio') {
      return <CardioPage />;
    }
    if (activeTab === 'Strength') {
      return <StrengthPage />;
    }
    if (activeTab === 'Diet') {
      return <DietPage />;
    }
    return <WorkoutPlanPage />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.tabBar}>
        {['Cardio', 'Strength', 'Diet', 'Workout Plan'].map(tab => (
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
      {renderTab()}
    </SafeAreaView>
  );
};

const BottomTab = createBottomTabNavigator();
const getScreenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconSource;

    if (route.name === 'You') {
      iconSource = require('../../images/you.png');
    } else if (route.name === 'Booking') {
      iconSource = require('../../images/booking.png');
    } else if (route.name === 'Account') {
      iconSource = require('../../images/account.png');
    }
    const tinyStyle = focused ? styles.iconFocused : styles.iconUnFocumsed;
    return <Image source={iconSource} style={[styles.tabIcon, tinyStyle]} />;
  },
  tabBarActiveTintColor: '#FF5733',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: '#fff',
    paddingBottom: 5,
    height: 65,
  },
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const AppNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={getScreenOptions}>
      <BottomTab.Screen name="You" component={MainPage} />
      <BottomTab.Screen name="Booking" component={BookingScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
