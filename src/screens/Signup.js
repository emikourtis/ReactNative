import {useEffect, useState } from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../Global/colors'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'
import InputForm from '../components/InputForm'
import { insertSession } from '../database'

const Signup = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerSignup,{data,isError,isSuccess,error,isLoading}] = useSignupMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmpasswordError, setConfirmPasswordError] = useState("")


  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data))
      insertSession(data)
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
    }
    if (isError) console.log(error)
  }, [data, isError, isSuccess])



  const onSubmit = () => {
    try {
        setEmailError("")
        setPasswordError("")
        setConfirmPassword("")
        signupSchema.validateSync({email,password,confirmPassword})
        triggerSignup({email,password})
    } catch (error) {
        switch(error.path){
          case "email": 
            setEmailError(error.message)
            break
          case "password":
            setPasswordError(error.message)
            break
          case "confirmPassword":
            setConfirmPasswordError(error.message)
            break
          default:
            break  
        }

    }
  }


  return (
    <View style={styles.main}>
      <Text style={styles.FirstTitle}>Ropa usada como nueva</Text>
      <View style={styles.container}>
          <Text style={styles.title} >Sign up</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={emailError}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
          />
           <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={confirmpasswordError}

          />
          <SubmitButton title="Send" onPress={onSubmit}  
          />
          <Text style={styles.sub}>Alredy have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Login")}>
              <Text style={styles.subLink}>Login</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default  Signup


const styles = StyleSheet.create({
    main:{
      justifyContent:"center",
      alignItems:"center"
    },
    FirstTitle:{
      paddingBottom:30,
      fontFamily:"Josefin",
      fontSize:50,
      paddingTop:20
    },
    container:{
      width:"90%",
      backgroundColor:colors.blue,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:10
    },
    title:{
      fontSize:22,
      fontFamily:"Lobster",
      color:"white"
    },
    sub:{
      fontSize:14,
      fontFamily:"Josefin",
      color:"white"
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:"blue"
    },
    error: {
      fontSize: 16,
      color: 'red',
      fontFamily: 'Josefin',
      fontStyle: 'italic',
      marginLeft: 20,
    }
})