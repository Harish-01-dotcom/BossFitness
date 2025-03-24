import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 12,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {color: 'white', fontWeight: 'bold'},
  disabledButton: {
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
  },
  error: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#ff0000',
  },
  success: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#28a745',
  },
});

export default styles;
