import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../Menu/style';

const cardioExercises = [
  {
    name: 'Running',
    minutes: 30,
    calories: 300,
    image: require('../../images/running.png'),
    benefit: 'Improves cardiovascular endurance...',
    videoUrl: 'https://youtu.be/HBPMvFkpNgE?si=itk2f_WPsQWbFzZa',
  },
  {
    name: 'Cycling',
    minutes: 45,
    calories: 400,
    image: require('../../images/cycling.png'),
    benefit: 'Enhances joint mobility...',
    videoUrl: 'https://youtu.be/cA1U68Wiil4?si=n-HwHy1ceoQndpTU',
  },
  {
    name: 'Jump Rope',
    minutes: 20,
    calories: 250,
    image: require('../../images/jumprope.png'),
    benefit: 'Improves coordination...',
    videoUrl: 'https://youtu.be/c6kw91RaBGI?si=d57gOAPPmwBvHpR6',
  },
  {
    name: 'Rowing Machine',
    minutes: 25,
    calories: 280,
    image: require('../../images/rowing.png'),
    benefit: 'Full-body workout...',
    videoUrl: 'https://youtu.be/dPezGjAhrU0?si=gFNOqfvfzLoydAet',
  },
  {
    name: 'Elliptical Trainer',
    minutes: 30,
    calories: 320,
    image: require('../../images/elliptical.png'),
    benefit: 'Low-impact cardio...',
    videoUrl: 'https://youtu.be/-GjuiJBMwSk?si=dRNBznexxo66m2Go',
  },
];

const strengthWorkouts = [
  {
    name: 'Chest',
    image: require('../../images/chest.png'),
    benefit: 'Strengthens the pectoral muscles...',
    videoUrl: 'https://youtu.be/BTxPU2AhHfU?si=WcueLDZdDylue3L4',
  },
  {
    name: 'Triceps',
    image: require('../../images/triceps.png'),
    benefit: 'Enhances arm stability...',
    videoUrl: 'https://youtu.be/OpRMRhr0Ycc?si=WfX4ud7yPTwtwdOv',
  },
  {
    name: 'Biceps',
    image: require('../../images/biceps.png'),
    benefit: 'Improves pulling strength...',
    videoUrl: 'https://youtu.be/i1YgFZB6alI?si=7W2GHb3ErHOaoyVN',
  },
  {
    name: 'Lats',
    image: require('../../images/lats.png'),
    benefit: 'Develops back width...',
    videoUrl: 'https://youtu.be/12xHxUnBEiI?si=VpLD19KRffFXZ0k3',
  },
  {
    name: 'Shoulder',
    image: require('../../images/shoulder.png'),
    benefit: 'Increases shoulder strength...',
    videoUrl: 'https://youtu.be/21lYP86dHW4?si=WF46AzGWGoglacxW',
  },
  {
    name: 'Leg',
    image: require('../../images/leg.png'),
    benefit: 'Builds lower body strength...',
    videoUrl: 'https://youtu.be/8zWDuWKdBZU?si=X5BUH4MLr38o97q4',
  },
  {
    name: 'Forearm',
    image: require('../../images/forearm.png'),
    benefit: 'Improves grip strength...',
    videoUrl: 'https://youtu.be/MfMxT_jXcPE?si=KKHncupCmDDwT4Rd',
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

export const CardioPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.body}>
      {cardioExercises.map((exercise, index) => (
        <View key={index} style={styles.boxFull}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('VideoPlayer', {videoUrl: exercise.videoUrl})
            }>
            <Image source={exercise.image} style={styles.exerciseImage} />
          </TouchableOpacity>
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
};

export const StrengthPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.body}>
      {strengthWorkouts.map((muscle, index) => (
        <View key={index} style={styles.boxFull}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('VideoPlayer', {videoUrl: muscle.videoUrl})
            }>
            <Image source={muscle.image} style={styles.exerciseImage} />
          </TouchableOpacity>
          <Text style={styles.boxText}>{muscle.name}</Text>
          <Text style={styles.planText}>{muscle.benefit}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export const DietPage = () => {
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

export const WorkoutPlanPage = () => (
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
