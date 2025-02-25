import { Text, View,StyleSheet,Image,ScrollView} from "react-native";

//para usar um CSS externo deve-se usar o StyleSheet
export default function Index() {
  return (
    <View style={estilos.container}>
      <ScrollView>
       {/* Meu cabeçalho */}
      <View style={estilos.cabecalho}>
          {/* minha logo */}
          <Text style={{fontSize:25}}>Meus <Text style={{fontWeight:'bold'}}>Livros</Text>
          </Text>
            <Image source={require('../assets/images/verificado.png')} style={{width:30,height:30,marginTop:4,marginLeft:10}} />
        
      {/* Meu cabeçalho mas seria o perfil  */}
        <View style={estilos.perfil}>
          <Text style={estilos.perfilText}>30</Text>
            <View style={estilos.perfil2}>
                <Text>livros lidos</Text>
                  <Image source={require('../assets/images/eu.jpg')} style={{width:70,height:70,borderRadius:60, transform: [{translateY:-35}]}} />
            </View>
          </View>


          
        </View>

        {/*Icones*/}
          <View style={{flex:1,width:350,flexDirection:"row",gap:25,marginTop:100,marginBottom:60, transform: [{translateX:25}]}}>
                  <Image source={require('../assets/images/livro.png')} style={{width:50,height:50}} />
                  <Image source={require('../assets/images/livro.png')} style={{width:50,height:50,}} />
                  <Image source={require('../assets/images/livro.png')} style={{width:50,height:50,}} />
                  <Image source={require('../assets/images/livro.png')} style={{width:50,height:50,}} />
                  <Image source={require('../assets/images/livro.png')} style={{width:50,height:50,}} />
          </View>



      <View style={{rowGap:40,transform: [{translateX:12}]}}>
        <View style={{flexDirection:"row",gap:40,width:400,}}>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

            </View>
        </View>
        <View style={{flexDirection:"row",gap:40,width:400,
        }}>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

            </View>
        </View>
        <View style={{flexDirection:"row",gap:40,width:400,
        }}>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

          </View>
          <View>
                  <Image source={require('../assets/images/livro1.jpeg')} style={{width:100,height:150}} />
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>
                      Colarine
                    </Text>
                    <Text style={{textAlign:"center"}}>
                        Neil Gaiman
                    </Text>

            </View>
        </View>

      </View>
      </ScrollView>
    </View>
  );

  //criação do css externo
}
const estilos = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
  },
    cabecalho:{
      position:'absolute',
      top:20,
      left:18,
      flexDirection:'row',
      justifyContent:"space-between",
    },
    perfil:{
      flex:1,
      transform: [{translateX:60}],
    },
    perfil2:{
      flexDirection:"row",
      gap:10,
    },
    perfilText:{
      fontWeight:'bold',
      transform: [{translateX:50}],
    }
})
