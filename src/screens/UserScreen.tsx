import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersStart} from '../redux/actions/userActions';
import {RootState} from '../redux/store';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const UserScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>error </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Text style={styles.title}>User Details</Text>
            <Text>
              Name: {item.firstName} {item.lastName}
            </Text>
            <Text>Maiden Name: {item.maidenName}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Username: {item.username}</Text>
            <Text>Password: {item.password}</Text>
            <Text>Birth Date: {item.birthDate}</Text>
            <Text>Image: {item.image}</Text>
            <Text>Blood Group: {item.bloodGroup}</Text>
            <Text>Height: {item.height}</Text>
            <Text>Weight: {item.weight}</Text>
            <Text>Eye Color: {item.eyeColor}</Text>
            <Text>
              Hair: {item.hair.color} ({item.hair.type})
            </Text>
            <Text>IP: {item.ip}</Text>
            <Text>Address: {item.address}</Text>
            <Text>-------------------</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserScreen;
