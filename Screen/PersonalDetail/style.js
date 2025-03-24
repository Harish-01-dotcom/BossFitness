import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },

  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
  },

  editButton: {
    marginTop: 10,
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#444',
  },

  value: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },

  saveButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  cancelButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
