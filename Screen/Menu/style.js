import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },

  topBar: {
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },

  quoteText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 6,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },

  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },

  activeTab: {
    borderBottomColor: '#FF5733',
  },

  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },

  activeTabText: {
    color: '#fff',
  },

  tabIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  iconFocused: {
    tintColor: '#FF5733',
  },

  iconUnfocused: {
    tintColor: 'gray',
  },

  // Workout Content Area
  body: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },

  boxFull: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
  },

  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },

  infoText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },

  planText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  exerciseImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 12,
  },

  // Diet input & button
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#FF5733',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  resultBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  workoutDayBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    elevation: 4,
  },

  workoutDay: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 4,
    textAlign: 'center',
  },

  workoutFocus: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },

  workoutItem: {
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  workoutName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },

  setsReps: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
});

export default styles;
