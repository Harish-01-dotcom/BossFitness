import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    backgroundColor: '#F76C6C',
    alignItems: 'center',
    paddingVertical: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  personalDetailButton: {
    borderWidth: 1.5,
    borderColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  personalDetailText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#F76C6C',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 25,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fafafa',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F76C6C',
  },
});

export default styles;
