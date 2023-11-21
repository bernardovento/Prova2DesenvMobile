import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPersonagem = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonagem();
  }, []);
  console.log(data);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.results}
          renderItem={({item}) => (
            <Text>
              {item.name}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;