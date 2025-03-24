import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007399',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  membershipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },

  card: {
    width: '47%',
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  selectedCard: {
    backgroundColor: '#E0F7FA',
    borderColor: '#007399',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007399',
    marginBottom: 8,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },

  button: {
    backgroundColor: '#007399',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 50,
    elevation: 4,
    shadowColor: '#007399',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
