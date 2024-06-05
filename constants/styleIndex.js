import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1027',
  },
  header: {
    flex: 2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: '40%',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContent: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: '30%',
    paddingLeft: '10%',
    marginBottom: '2%',
    fontSize: 25,
    color: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#280d3e',
  },
  button: {
    width: '100%',
    height: '20%',
    marginTop: '2%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99272d',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    alignItems: 'center',
    marginVertical: '2%',
    borderRadius: 20,
  },
  itemText: {
    fontSize: 25,
    color: '#a4a4a4',
  },
});

export default styles;