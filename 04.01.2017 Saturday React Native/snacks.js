// snacks
 
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform,
  Image,
  AppRegistry,
  Navigator
} from 'react-native';

// Importing scenes for our app

class Home extends Component {

  // The press function takes in an argument (movie name) and pushes to the navigator the individual movie page
  // It also passes along the name of the movie which will be used fetch information from the OMDB API
  press(movie) {
    this.props.navigator.push({
      id: 2,
      // We can pass any information we want to the next scene as props
      passProps: {
        name: movie
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>flix<Text style={{color:'#ff4981'}}>.</Text></Text>
        {/*Each button will call the press function with a different movie name*/}
        <TouchableHighlight onPress={() => this.press('The Grand Budapest Hotel')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>The Grand Budapest Hotel</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("Rosemary's Baby")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Rosemary's Baby</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Kill Bill')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Kill Bill</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('The Witch')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>The Witch</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Fantastic Mr. Fox')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Fantastic Mr. Fox</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Nightmare Before Christmas')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Nightmare Before Christmas</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  movieText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  }
});

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: ''
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // When the component mounts..
  componentDidMount() {
    // Call our detchData function on the movie that was passed in as props
    this.fetchData(this.props.name)
  }

  fetchData(movie) {
    // We pass the movie the user entered in into the URL for the API call.
    fetch('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json')
    .then(response => response.json())
    .then((responseData) => {
      // After the data is received, we set this.state.movie to the result of the API call.
      console.log(responseData);
      this.setState({ movie: responseData });
      this.setState({ loading: false });
    })
    .catch(err => console.log(err));
  }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

    if (!this.state.loading) {

      return (
        <View style={styles2.container}>

          <View style={styles2.header}>
            <Text style={styles2.title}>{this.props.name}</Text>
          </View>

          <Image
            style={styles2.imageStyle}
            source={{ uri: this.state.movie.Poster }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles2.infoTextContainer}>
              <Text style={styles2.bigInfoText}>{this.state.movie.Rated}</Text>
              <Text style={styles2.smallInfoText}>Rated</Text>
            </View>
            <View style={styles2.infoTextContainer}>
              <Text style={styles2.bigInfoText}>{this.state.movie.Year}</Text>
              <Text style={styles2.smallInfoText}>Year</Text>
            </View>
            <View style={styles2.infoTextContainer}>
              <Text style={styles2.bigInfoText}>{this.state.movie.imdbRating}</Text>
              <Text style={styles2.smallInfoText}>IMDB</Text>
            </View>
          </View>

          <Text style={styles2.text}>{this.state.movie.Plot}</Text>

          <Text style={styles2.bigLightText}>{this.state.movie.Director}</Text>
          <Text style={styles2.bigLightText}>{this.state.movie.Genre}</Text>

          <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgba(76,217,175,1)', fontWeight: 'bold'}}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text>Loading {this.props.name} information!</Text>
          <TouchableHighlight onPress={this.handlePress}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#c9f3e7'}}>
              <Text>Go Back!</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  infoTextContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageStyle: {
    height: 150,
    width: 360,
    alignSelf: "center",
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  bigInfoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  smallInfoText: {
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  bigLightText: {
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25,
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35977a',
    height: 50,
  },
  title: {
    color: '#fff6d1',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

class Splash extends Component {

  render() {
    return (

      <View style={styles3.container}>
        <Image source={{url: 'http://i.imgur.com/Lv6KT11.png'}} style={{ height: 200, width: 200 }}/>
      </View>

    )
  }

  // Life-cycle method that will run the following code once the component has been mounted...
  componentDidMount() {
    // Call the nextPage function which will transition us to the home page after 2 seconds
    setTimeout(() => this.nextPage(), 2000);
  }

  // The nextPage function takes us to the home page
  nextPage() {
    // Pushes a new route to the navigation stack. This will be our home page since it has an id of 1
    this.props.navigator.push({
      id: 1
    });
  }

}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(76,217,175,1)'
  }
});


export default class MultipleSceneApp extends Component {

  // Our renderScene function will choose which scene to render based on the route id
  renderScene(route, navigator) {
    if (route.id === 1) {
      return <Home navigator={navigator} />
    }
    else if (route.id === 2) {
      return <Movie navigator={navigator} {...route.passProps} />
    }
    else if (route.id === 3) {
      return <Splash navigator={navigator} />
    }
  }

  // The configureScene function allows us to change the animation properties of a scene
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      // Our Navigator handles the transition between different scenes in our app
      <Navigator
        // The first page we are going to render
        initialRoute={{ id: 3 }}
        // Passing in our renderScene function
        renderScene={this.renderScene}
        // Passing in our configureScene function
        configureScene={this.configureScene}
      />
    );
  }

}

AppRegistry.registerComponent('MultipleSceneApp', () => MultipleSceneApp);
