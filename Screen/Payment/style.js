import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007399',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  subtitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },

  cardform: {
    width: '100%',
    height: 160,
    marginVertical: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },

  button: {
    backgroundColor: '#0088A8',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
