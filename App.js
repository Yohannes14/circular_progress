import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // progress increase
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {(fill) => <Text style={styles.progressText}>{Math.round(fill)}%</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
