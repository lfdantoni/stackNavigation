import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

 class Screen1 extends React.Component {
    // static navigationOptions = {
    //     title: 'Login',
    //     header: ({ goBack, navigate }) => {
    //       const style = { backgroundColor: 'rgb(200, 200, 0)', height: 50, marginTop: 20 };
    //       left = (
    //         <TouchableOpacity style={style} onPress={() => navigate('DrawerOpen')}>
    //           <Text>
    //             Open
    //           </Text>
    //         </TouchableOpacity>
    //       )
    
    //       return left
    //     }
    //   };

    render(){
        return (<View style={styles.container}>
            <Text>Screen 1</Text>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

export default connect()(Screen1)