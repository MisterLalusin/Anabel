
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, styles } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  render() {
    var width = Dimensions.get('window').width;
    var height = (20 * width / 100)-10;
    var scrollViewHeight = Dimensions.get('window').height - (height+3) + 20;
    return (
      <SafeAreaView>
        <Image source={require('./app_header.png')}  style={{width: width, height: height}} />
        
        <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={{width: 60, height: 3, backgroundColor: 'powderblue'}} />
           <View style={{width: 120, height: 3, backgroundColor: 'skyblue'}} />
           <View style={{width: width, height: 3, backgroundColor: 'steelblue'}} />
        </View>


        <ScrollView style={{marginTop: 3, height: scrollViewHeight}}>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('Functions')}>
             <Image source={require('./lesson_functions.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Functions</Text>
               <Text style={{marginStart:2, fontSize:8}}>Domain &#123; x / x &#949; | R &#125;</Text>
               <Text style={{marginStart:2, fontSize:8}}>Range &#123; y / y &#949; | R &#125;{"\n"}</Text>
             </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('Factoring')}>
             <Image source={require('./lesson_factoring.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Factoring</Text>
               <Text style={{marginStart:2, fontSize:8}}>(3x+1)(x+3)</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('Polynomial')}>
             <Image source={require('./lesson_polynomial.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Polynomial</Text>
               <Text style={{marginStart:2, fontSize:8}}>p(x) = a&#8345;x&#8319; + a&#8345;&#8331;&#8321;x&#8315;&#185; + a&#8345;&#8331;&#8322;x&#8315;&#178; +...a&#8321;x + a&#8320;</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('Graphing')}>
             <Image source={require('./lesson_graphing.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Graphing</Text>
               <Text style={{marginStart:2, fontSize:8}}>(-&#8734;, -1) | (-1,1) | (1, +&#8734;)</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('oob')}>
             <Image source={require('./lesson_bound_of_zeroes.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Bound Of Zeros</Text>
               <Text style={{marginStart:2, fontSize:8}}>Upper Bound, Lower Bound</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('GraphingSineCurve')}>
             <Image source={require('./lesson_graphing_sine_curve.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Graphing Sine Curve</Text>
               <Text style={{marginStart:2, fontSize:8}}>(&#960;/2 , 1) , (&#960;, 0) , (3&#960;/2, -1) , (2&#960;, 0)</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('LimitOfAFunction')}>
             <Image source={require('./lesson_limit_of_a_function.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Limit of a function</Text>
               <Text style={{marginStart:2, fontSize:8}}>lim f(x) = L</Text>
               <Text style={{marginStart:2, fontSize:8}}>x &#8594; a</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('Continuity')}>
             <Image source={require('./lesson_continuity.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Continuity</Text>
               <Text style={{marginStart:2, fontSize:8}}>lim f(x) = 3</Text>
               <Text style={{marginStart:2, fontSize:8}}>x &#8594; 3&#8314;</Text>
             </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('Derivative')}>
             <Image source={require('./lesson_derivative.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Derivative</Text>
               <View style={{flexDirection:'row', marginStart:2}}>
          <View>
              <Text style={{fontSize:8}}>
                lim
              </Text>
              <Text style={{fontSize:4}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text style={{fontSize:8}}>&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:8}}>
                f(x + &#916;x) - f(x)
              </Text>
              <Text style={{fontSize:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>
             </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('DifferentiationRule')}>
             <Image source={require('./lesson_differentiation_rule.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Differentiation Rule</Text>
               <Text style={{marginStart:2, fontSize:8}}>f(x) = 5</Text>
              <Text style={{marginStart:2, fontSize:8}}>d|dx = 0</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('LeibnizsNotation')}>
             <Image source={require('./lesson_leibnizs_notation.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Leibniz's Notation</Text>
        <View style={{flexDirection:'row'}}>
        <View>
          <Text style={{textDecorationLine:'underline',fontSize:8}}>
              dy
            </Text>
            <Text style={{fontSize:8}}>
              dx
            </Text>
          </View>
          <View><Text style={{fontSize:8}}>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
          <View>
            <Text style={{textDecorationLine:'underline',fontSize:8}}>
              &nbsp;d&nbsp;
            </Text>
            <Text style={{fontSize:8}}>
              dx
            </Text>
          </View>
          <View><Text style={{fontSize:8}}>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
          <View>
            <Text style={{textDecorationLine:'underline',fontSize:8}}>
              df
            </Text>
            <Text style={{fontSize:8}}>
              dx
            </Text>
          </View>
          <View><Text style={{fontSize:8}}>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
          <View>
            <Text style={{textDecorationLine:'underline',fontSize:8}}>
              d f(x)
            </Text>
            <Text style={{fontSize:8}}>
            &nbsp;&nbsp;dx
            </Text>
          </View>
          <View><Text style={{fontSize:8}}>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
          <View>
            <Text style={{textDecorationLine:'underline',fontSize:8}}>
            &nbsp;d&nbsp;
            </Text>
            <Text style={{fontSize:8}}>
            dx
            </Text>
          </View>
          <View style={{marginTop:4,fontSize:8}}><Text style={{fontSize:8}}>&nbsp;f(x)</Text></View>
        </View>
             </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('DerivativesOfTrigonometricFunctions')}>
             <Image source={require('./lesson_derivatives_of_trigonometric_functions.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Derivatives Of Trigonome...</Text>
               <Text style={{marginStart:2, fontSize:8}}>y = cos 3x</Text>
               <Text style={{marginStart:2, fontSize:8}}>y&#7590; = -3 sin 3x</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('DerivativesOfExponentialAndLogarithmicFunctions')}>
             <Image source={require('./lesson_derivatives_of_exponential_and_logarithmic_functions.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Derivatives Of Exponentia...</Text>
               <Text style={{marginStart:2, fontSize:8}}>y = e&#8308;x</Text>
               <Text style={{marginStart:2, fontSize:8}}>y&#7590; = 4 e&#8308;</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('ImplicitDifferentiation')}>
             <Image source={require('./lesson_implicit_differentiation.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Implicit Differentiation</Text>
               <Text style={{marginStart:2, fontSize:8}}>f(x) = y = y&#178;</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('LHopitalsRule')}>
             <Image source={require('./lesson_lhopitals_rule.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>L'Hopital's Rule</Text>
               
          <View>
            <View style={{flexDirection:'row'}}>
              <View>
                <Text style={{fontSize:8, textDecorationLine:'underline'}}>
                  0
                </Text>
                <Text style={{fontSize:8}}>
                  0
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8}}>
                  0 &#8226;&nbsp;&#8734;
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8, textDecorationLine:'underline'}}>
                &#177;&#8734;
                </Text>
                <Text style={{fontSize:8}}>
                &#177;&#8734;
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8}}>
                &#8734;-&#8734;
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8}}>
                0&#8304;
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8}}>
                  (&#177;&#8734;)&#8304;
                </Text>
              </View>
              <Text style={{fontSize:8}}>&nbsp;,&nbsp;</Text>
              <View>
                <Text style={{fontSize:8}}>
                  1
                </Text>
              </View>
              <View><Text style={{fontSize:5}}>&#177;&#8734;</Text></View>
            </View>
          </View>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('PartialDifferentiation')}>
             <Image source={require('./lesson_partial_differentiation.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:5,fontSize:20}}>Partial Differentiation</Text>
               <View style={{flexDirection:'row'}}>
         <View>
             <Text style={{textDecorationLine:'underline', fontSize:8}}>  &#8706;F&nbsp;&nbsp;</Text>
             <Text style={{fontSize:8}}> &nbsp;&#8706;x</Text>
         </View>
         <Text>&nbsp;&nbsp;</Text>
         <View>

          <Text style={{textDecorationLine:'underline',fontSize:8}}>  &#8706;F&nbsp;&nbsp;</Text>
        
        <Text style={{fontSize:8}}> &nbsp;&#8706;y </Text>
         </View>
         <Text>&nbsp;&nbsp;</Text>
         <View>
          <Text style={{textDecorationLine:'underline', fontSize:8}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text style={{fontSize:8}}> &nbsp;&#8706;y&#178;</Text>
            </View>
         <Text>&nbsp;&nbsp;</Text>
         <View>
          <Text style={{textDecorationLine:'underline',fontSize:8}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text style={{fontSize:8}}> &nbsp;&#8706;x&#178;</Text>
          </View>
         <Text>&nbsp;&nbsp;</Text>
         <View>
         <Text style={{textDecorationLine:'underline',fontSize:8}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
        <Text style={{fontSize:8}}> &nbsp;&#8706;x&#8706;y</Text>
         </View>
         <Text>&nbsp;&nbsp;</Text>
         <View>
          <Text style={{textDecorationLine:'underline', fontSize:8}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
        <Text  style={{fontSize:8}}> &nbsp;&#8706;y&#8706;x</Text>
         </View>

       </View>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#f0f0f0'}} onTouchEndCapture={() => this.props.navigation.navigate('IntegralCalculus')}>
             <Image source={require('./lesson_integral_calculus.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Integral Calculus</Text>
               <Text style={{marginStart:2, fontSize:8}}>f(x) dx = Fx + c</Text>
             </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#fff'}} onTouchEndCapture={() => this.props.navigation.navigate('IntegralTrigonometric')}>
             <Image source={require('./lesson_integral_trigonometric.png')}  style={{width: 50, height: 50, marginVertical:5, marginStart:20}} /> 
             <View style={{flex: 1, flexDirection: 'column',marginStart:8}}>
               <Text style={{marginTop:8,fontSize:20}}>Integral Trigonometric</Text>
               <Text style={{marginStart:2, fontSize:8}}>&#8747; sin x dx = -cos x + c</Text>
             </View>
          </View>
        
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class FunctionsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
      <View style={{ marginHorizontal: 12 }}>
        <Text>
          Functions{"\n"}- all functions are relations{"\n"}- not all
          relations are functions{"\n\n"}x &#8594; repeat{"\n"}y &#8594;{" "}
          {"\n"}
          {"\n"}
          domain{"\n"}
          &nbsp;&#8593;{"\n"}
          (x,y){"\n"}
          &nbsp;&nbsp;&nbsp;&#8595;{"\n"}
          &nbsp;&nbsp;&nbsp;Range{"\n"}
          &#123;(1,2),(2,1),(3,4)&#125;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&#8595;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;x = 1,2,3{"\n"}
          ordered pair &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y =
          2,1,4{"\n"}
          x&nbsp;&nbsp;&nbsp;&nbsp;y{"\n"}
          1&#8594;1{"\n"}
          1&#8594;M{"\n"}
          M&#8594;1x{"\n"}
          {"\n"}y = x + 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(x and y won't be the
          same){"\n"}
          {"\n"}
          Ex.1 + 2 = 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10003; Function{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;2 + 2 = 4{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;3 + 2 = 5{"\n"}
          {"\n"}
          Ex. (An x repeat therefore it is not a function){"\n"}
          &#8730;y&#178; &#8309;&#8730;x+2{"\n"}y = &#177;&#8730;1+2{"\n"}y =
          &#177;&#8730;3{"\n"}
          {"\n"}y = &nbsp;&nbsp;&nbsp;1{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;
          {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x+2{"\n"}
          x+2&#8800;0{"\n"}
          x&#8800;-2{"\n"}
          &#123; x / x &#949; | R ; x &#8800; -2 &#125;{"\n"}
          {"\n"}
          1.) y = 3x - 1{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;Domain &#123; x / x &#949; | R &#125;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;Range &#123; y / y &#949; | R &#125;{"\n"}
          {"\n"}
          2.)y = 9{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;D &#123; x / x &#949; | R &#125;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;R &#123; y / y = 9 &#125;{"\n"}
          {"\n"}
          3.) y = &nbsp; 1 {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &#9135;&#9135;&#9135;&#9135;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          x+2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x+2&#8800; 0{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x
          &#8800;-2 &nbsp;&nbsp;&nbsp; x &#8800;-2 {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;D &#123; x / x &#949; | R ; x &#8800; -2
          &#125;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&#40; y = &nbsp; 1 &nbsp;&nbsp; &#41; x+2
          {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &#9135;&#9135;&#9135;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          x+2 {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;y(x+2)=1&nbsp;&nbsp;&nbsp;&nbsp;xy = 1 -2y
          {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;xy+2y=1
          &nbsp;&nbsp;&nbsp;&#9135;&#9135;&nbsp;&nbsp;&nbsp;
          &#9135;&#9135;&#9135;&#9135;&#9135;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          x = &nbsp;1-2y{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &#9135;&#9135;&#9135;&#9135;&#9135;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;R &#123; y / y &#949; | R ; y &#8800; 0
          &#125;{"\n"}
          {"\n"}
          4.)y = &nbsp;&nbsp; 3 {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &#9135;&#9135;&#9135;&#9135;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x+1
          {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x+1&#8800; 0{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x &#8800;-1{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;D &#123; x / x &#949; | R ; x &#8800;-1 &#125;
          &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;R &#123; y / y &#949; | R ; y &#8800;0 &#125;{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;x+1(y) = ( 3 ) x+1{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;&#9135;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x+1{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;xy+y=3{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;xy=3-y{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135; &nbsp; &#9135;&#9135;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y &nbsp;&nbsp;&nbsp;&nbsp; y{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;x=3-y{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9135;&#9135;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y{'\n'}
        5.)y = ax&#178; + bx + c {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = x&#178; + 3x - 2 {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;D &#123; x / x &#949; | R &#125;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;a=1 b=-3 c=-2{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;R &#123; y / y &#949; | R ; y &#8805;-17 &#125; a>0{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;y=9ac-b&#178;&nbsp;&nbsp;&nbsp;&nbsp;y=-8-9{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;&#9135;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;=4(1)(-2)(3)&#178;&nbsp;&nbsp;&nbsp;&nbsp;y=-17{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9135;&#9135;{'\n'}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4{'\n'}

        </Text>
      </View>
    </ScrollView>
    );
  }
}


class FactoringScreen extends React.Component {
  render() {

    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );

    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
          <Text>
          Factor the following:{"\n"}
          1. 3x&#178;+10x+3{"\n"}
          2. x&#179;-x&#178;-10x-8{"\n"}
          3. 7x&#178;+14{"\n"}
          4. x&#178;-36{"\n"}
          {"\n"}
          {"\n"}
          Solution :{"\n"}
          1. We can directly get the factor using Trial and Error.{"\n"}
          &nbsp; &nbsp;<Text style={stylesVar.bold}>(3x+1)(x+3)</Text>
          {"\n"}
          {"\n"}
          2. Get the Constants of the function first.{"\n"}
          &nbsp; &nbsp; 1 -1 -10 -8{"\n"}
          {"\n"}
          &nbsp; &nbsp; Get the factors of 8. which are, {"\n"}
          &nbsp; &nbsp; 1, -1, 2, -2, 4, -4, 8, -8 {"\n"}
          {"\n"}
          &nbsp; &nbsp; Use Synthetic Division to test each factor. Example :{" "}
          {"\n"}
          &nbsp; &nbsp; <Text style={stylesVar.underline}>1 |</Text>1 -1 -10 -8 {"\n"}
          &nbsp; &nbsp; <Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;0&nbsp;&nbsp;-10</Text>
          {"\n"}
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 0 -10 -18{"\n"}
          {"\n"}
          &nbsp; &nbsp; Since the Answer is -18, we can conclude that 1 is not a
          root of our function.{"\n"}
          &nbsp; &nbsp; Trial and Error, try the next one which is -1.{"\n"}
          &nbsp; &nbsp; <Text style={stylesVar.underline}>-1</Text> | 1 -1 -10 -8 {"\n"}
          &nbsp; &nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;8</Text>
          {"\n"}
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 -2&nbsp;&nbsp;&nbsp;-8&nbsp;&nbsp;&nbsp;0{"\n"}
          {"\n"}
          &nbsp; &nbsp; If the Remainder is 0. We can say that -1 is a root of
          the function.{"\n"}
          &nbsp; &nbsp; Equate -1 to 0. hence, x+1=0. The first factor is (x+1)
          {"\n"}
          {"\n"}
          &nbsp; &nbsp; Use the Coefficients(1 -2 -8 0) to get a new equation.
          {"\n"}
          &nbsp; &nbsp; Working right to left, the next number is your constant,
          the next is the coefficient for x, the next is the coefficient for x
          squared.{"\n"}
          &nbsp; &nbsp; x&#178;-2x-8{"\n"}
          {"\n"}
          &nbsp; &nbsp; Since it's now squared, you can easily get the next two
          factors.{"\n"}
          &nbsp; &nbsp; (x-4)(x+2){"\n"}
          {"\n"}
          &nbsp; &nbsp; Therefore, <Text style={stylesVar.bold}>(x+1)(x+2)(x-4)</Text>are the factors of
          x&#179;-x&#178;-10x-8{"\n"}
          {"\n"}
          3. The Coefficients are divisble by 7, so you can take it out. {"\n"}
          &nbsp; &nbsp;Hence,<Text style={stylesVar.bold}> 7(x&#178;+2)</Text>.{"\n"}
          {"\n"}
          4. This one is easier, since both are perfect square. Just get both
          their square root and if the operator is negative, use different
          signs.{"\n"}
          &nbsp; &nbsp;<Text style={stylesVar.bold}>(x+6)(x-6)</Text>.{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}

class PolynomialScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>

        <Text>
       Polynomial{"\n"}
       a polynomial is the sum of one or more monomials with real coefficients and nonnegative integer exponents. The degree of the polynomial function is the highest value for n where an is not equal to 0. Polynomial functions of only one term are called monomials or power functions. A power function has the form {"\n"}
       {"\n"}
       p(x) = a&#8345;x&#8319; + a&#8345;&#8331;&#8321;x&#8315;&#185; + a&#8345;&#8331;&#8322;x&#8315;&#178; +...a&#8321;x + a&#8320;{"\n"}
       {"\n"}
       where n is a non-negative integer.{"\n"}
      Its domain and range are any real numbers, represented in:{"\n"}
      D	&#123;x/x	&#1013; R&#125;{"\n"}
      R	&#123;x/x	&#1013; R&#125;{"\n"}
      where 'R' is any real numbers.{"\n"}
      {"\n"}
      {"\n"}
  
      </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 140, height: 100}} >
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Equation</Text>
        
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 75, height: 35}} >
        <Text>&nbsp;&nbsp;&nbsp;Degree</Text>
       </View>
      <View style={{width: 75, height: 35}}  >
      <Text>&nbsp;Leading Coefficient</Text>
       </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 75, height: 35}} >
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;Odd{"\n"}
        {"\n"}
        {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Even</Text>
       </View>
      <View style={{width: 75, height: 40}}  >
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{"\n"}
        {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{"\n"}
        {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
        </Text>
       </View>
      <View style={{width: 75, height: 35}} >
        <Text>&nbsp;Down{"\n"}
        &nbsp;Up{"\n"}
        {"\n"}
        &nbsp;Up{"\n"}
        {"\n"}
        &nbsp;Down</Text>
       </View>
      <View style={{width: 75, height: 35}}  >
      <Text>&nbsp;Up{"\n"}
      &nbsp;Down{"\n"}
      {"\n"}
      &nbsp;Up{"\n"}
      {"\n"}
      &nbsp;Down</Text>
       </View>
    </View>


       </View>



      <View style={{width: 140, height: 20}}  >
      <Text>&nbsp;&nbsp;&nbsp;End behavior</Text>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 75, height: 35}} >
        <Text>&nbsp;Left Arrow</Text>
       </View>
      <View style={{width: 75, height: 35}}  >
      <Text>Right{"\n"}
        Arrow</Text>
       </View>
       

       
    </View>

       </View>
      <View style={{width: 100, height: 53}}  >
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Domain</Text> 
      <Text>{'\n'}{'\n'}</Text>
      <Text>{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x	&#1013; R{"\n"}
      {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x	&#1013; R{"\n"}
      {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x	&#1013; R</Text> 
       </View>
      <View style={{width: 100, height: 53, backgroundColor: 'red'}}  >
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Range</Text> 
      <Text>{'\n'}{'\n'}</Text>
      <Text>{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y	&#1013; R{"\n"}
      {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y	&#1013; R{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y	&#8805;&nbsp;min.
      {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y	&#1013; R{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y	&#8804;&nbsp;min.
      </Text> 
       </View>
    </View>

    <Text> {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    The above table shows the relation between the polynomial and the start 
    and end of the function to be graph. The structure of the graph depends on the first coefficient
    and its degree.</Text> 

        </View>
    </ScrollView>
    );
  }
}

class GraphingScreen extends React.Component {
  render() {
    var width = Dimensions.get('window').width - 10;
    var height1 = (104 * width / 100)-10;
    var height2 = (97 * width / 100)-10;
    var height3 = (56 * width / 100)-10;
    var height4 = (56 * width / 100)-10;
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
          
          
        <Text>
        <Text style={stylesVar.bold}>Graphing</Text>{"\n"}{"\n"}
        1. y = x&#179;-x&#178;-x+1 {"\n"}{"\n"}
        There are 4 steps in Graphing.{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Step 1. Factor the polynomial.</Text>{"\n"}{"\n"}
        
        Since the polynomial is in 3rd degree, we know that it has 3 factors.{"\n"}
        Using Synthetic Division we can find the first factor based on the constant, 1.{"\n"}
        The possible factors of 1 are (1, -1).{"\n"}{"\n"}   
        &nbsp;&nbsp;<Text style={stylesVar.underline}>1 |</Text>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;-1&nbsp;&nbsp;-1&nbsp;&nbsp;&nbsp;1{"\n"}
        &nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;-1</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;-1&nbsp;&nbsp;&nbsp;0{"\n"}{"\n"}
        Since the Remainder is 0. We now know that 1 is a factor of our function. Equate it to zero to get the first factor, which is <Text style={stylesVar.bold}>(x-1)</Text>.{"\n"}{"\n"}
        From the answer in the Synthetic Division, we can get the new function<Text style={stylesVar.bold}>(x&#178;-1)</Text>.{"\n"} 
        We can directly factor it to get the last 2 factors.<Text style={stylesVar.bold}>(x+1)(x-1)</Text> .{"\n"} {"\n"} 
        We now have the 3 factors, <Text style={stylesVar.bold}>(x-1)(x-1)(x+1)</Text>. We can proceed to the next step.{"\n"} {"\n"}
        <Text style={stylesVar.bold}>Step 2. Find the Zeros.</Text>{"\n"}{"\n"}
        To find the Zeros, just Equate each factor to 0. {"\n"}
        x - 1 = 0 {"\n"}
        x = 1 {"\n"}
        Do it for rest to get:{"\n"}
        <Text style={stylesVar.bold}>x = 1 | x = 1 | x = -1</Text>{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Step 3. Use the Zeros as the Intervalsm</Text>{"\n"}{"\n"}
        </Text>
        <Image source={require('./graphing_graph_1.png')}  style={{width: width, height: height1}} />
        <Text>{"\n"}{"\n"}</Text>
        <Text>
        <Text style={stylesVar.bold}>Step 4. Create the Table of Values. </Text>{"\n"}{"\n"}
        Choose any number between -&#8734; to -1, -1 to 1, and 1 to +&#8734; for the x value.
        In this example, we chose -2, 0 and 3{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Factor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (-&#8734;, -1) | (-1,1) | (1, +&#8734;)</Text>{"\n"}
        X-Value &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3{"\n"}
        &nbsp;&nbsp;&nbsp;(x-1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2{"\n"}
        &nbsp;&nbsp;&nbsp;(x-1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2{"\n"}
        &nbsp;&nbsp;&nbsp;(x+1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4{"\n"}
        f(x)=(x-1)(x-1)(x+1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16{"\n"}
        Graph the x-axis.&nbsp;&nbsp;&nbsp;&nbsp;below&nbsp;&nbsp;&nbsp;&nbsp; above&nbsp;&nbsp;&nbsp;&nbsp; above{"\n"}{"\n"}
        Using (<Text style={stylesVar.italic}>X-Value as x , f(x)=(x-1)(x-1)(x+1) as y</Text> ). Graph.{"\n"}{"\n"}
        </Text>
        <Image source={require('./graphing_graph_2.png')}  style={{width: width, height: height2}} />
        <Text>
        {"\n"}{"\n"}

You're done.{"\n"}{"\n"}
2. y = (2x-1)(x+4)(x-5){"\n"}{"\n"}
Since it's already in that form, you can directly equate it to 0 to get the Zeros. {"\n"}
The zeros are : <Text style={stylesVar.bold}>x = 1/2 | x = -4 | x = 5</Text>{"\n"}{"\n"}
        </Text>
        <Image source={require('./graphing_graph_3.png')}  style={{width: width, height: height3}} />
        <Text>
        {"\n"}{"\n"}
Create the table of values.{"\n"}{"\n"}
<Text style={stylesVar.bold}>Factor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (-&#8734;,-4) | (-4,1/2) | (1/2,5) | (5,+&#8734;)</Text>{"\n"}
X-Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6{"\n"}
&nbsp;&nbsp;(2x-1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11{"\n"}
&nbsp;&nbsp;(x+4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10{"\n"}
&nbsp;&nbsp; (x-5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1{"\n"}
f(x)=(2x-1)(x+4)(x-5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -286&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 110{"\n"}
Graph the x-axis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; below&nbsp;&nbsp;&nbsp;&nbsp; above&nbsp;&nbsp;&nbsp;&nbsp; below&nbsp;&nbsp;&nbsp;&nbsp; above{"\n"}{"\n"}
Graph.{"\n"}{"\n"}
        </Text>
        <Image source={require('./graphing_graph_4.png')}  style={{width: width, height: height4}} />
        <Text>
        {"\n"}{"\n"}
        </Text>


        </View>
      </ScrollView>
    );
  }
}

class oobScreen extends React.Component {
  render() {
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );
    return (
      
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
        <Text>
        <Text style={stylesVar.bold}>Bound of Zeroes</Text>{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Upper Bound </Text>- Smallest positive integer.{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Positive is the sign of 3rd liners.{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Lower Bound </Text>- Largest negative integer.{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Alternate sign of 3rd liners.{"\n"}{"\n"}
        Example.{"\n"}{"\n"}
        f(x) = x&#179;-4x&#178;+x+6 {"\n"}{"\n"}
        <Text style={stylesVar.bold}>A. Look for the Zeroes.</Text>{"\n"}{"\n"}
        Based on the constant, [6].{"\n"}
        Possible zeroes are : <Text style={stylesVar.bold}>&#177;1, &#177;2, &#177;3, &#177;6 </Text> {"\n"}{"\n"}
        Use<Text style={stylesVar.bold}> Synthetic Division </Text> to get the zeroes.{"\n"}
        You should get the following:{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Zeroes [-2, 3, -1]</Text>{"\n"}{"\n"}
        <Text style={stylesVar.bold}>B. Bound of Zeroes</Text>{"\n"}{"\n"}
        To get the Upper Bound, you get the next number of your highest zero, if the 3rd liner is all positive, that's your Upper Bound.{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Upper Bound: </Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>4 |</Text>&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; 6{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 </Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;10{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>3 |</Text>&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; 6{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;-3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 </Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-1&nbsp;&nbsp;&nbsp;-2 &nbsp;&nbsp;&nbsp;&nbsp;0{"\n"}{"\n"}
        Since in the 3rd liner of 4, all the numbers are positive. We can conclude that<Text style={stylesVar.bold}> 4</Text> is the Upper Bound{"\n"}{"\n"}{"\n"}
        To get the Lower Bound, you get the next number of your lowest zero, if the 3rd liner has Alternating signs, that's your Lower Bound.{"\n"}{"\n"}
        <Text style={stylesVar.bold}>Lower Bound: </Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>-3 |</Text>&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; 6{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -3&nbsp;&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;-66 </Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 &nbsp;&nbsp;&nbsp;&nbsp;-7&nbsp;&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;-60{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>-4 |</Text>&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; 6{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-4 </Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 &nbsp;&nbsp;&nbsp;&nbsp; 2{"\n"}{"\n"}
        Since in the 3rd liner of -3, it has an alternating signs. We can conclude that<Text style={stylesVar.bold}> -3</Text> is the Lower Bound.{"\n"}{"\n"}{"\n"}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

class SineCurveScreen extends React.Component {
  render() {
    var width = Dimensions.get('window').width - 10;
    var height1 = (66 * width / 100)-10;
    var height2 = (80 * width / 100)-10;
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
        <View style={{ marginHorizontal: 12 }}>
        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Sine Curve</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;y = a sin bx {"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>a</Text> = Amplitude = Range{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>p</Text> = Period = (2&#960;)/b{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Example.</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;y = sin x; a = 1; b = 1{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Step 1. Find the Amplitude.</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; a = 1 &#8594;<Text style={stylesVar.bold}> -1 &#60; y &#60; 1</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Step 2. Find the Period.</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; i. p = 2&#960;/b = 2&#960;/1 = <Text style={stylesVar.bold}>2&#960;</Text> {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; ii. p/4 = 2&#960;/4 =<Text style={stylesVar.bold}> &#960;/2 , &#960; , 3&#960;/2 , 2&#960;</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;In <Text style={stylesVar.italic}>figure ii.</Text> starting from &#960;/2, you just multiply it by 1, 2, 3, 4... to get the next value.{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Step 3. Find the Coordinates.</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Using the period and amplitude to find the Coordinates.{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &#960;/2 |&nbsp;&nbsp; &#960; &nbsp;&nbsp;| 3&#960;/2 | 2&#960;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; sin x &nbsp;&nbsp;|&nbsp;&nbsp; 1 &nbsp;&nbsp;|&nbsp;&nbsp; 0 &nbsp;&nbsp;|&nbsp;&nbsp; -1 &nbsp;&nbsp; | 0{"\n"}{"\n"} 
        &nbsp;&nbsp;&nbsp;&nbsp;The Coordinates are:<Text style={stylesVar.bold}> (&#960;/2 , 1) , (&#960;, 0) , (3&#960;/2, -1) , (2&#960;, 0)</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Step 4. Graph</Text> {"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        <Image source={require('./graphing_sine_curve_graph_5.png')}  style={{width: width, height: height1}} />
        <Text>
        {"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>D&#123;x/x &#949; R&#125;</Text> -  Domain is x such that x is any Real numbers {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>R&#123;-1&#60; y &#60;1&#125;</Text> - Range is y is greater than -1 and less than positive 1{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;The Domain is almost always the same. The Range depends on the given.{"\n"}{"\n"}{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Example.</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;2. Graph y = 3 sin 2x in the interval -&#960;/4 &#8804; x &#8804; 5&#960;/4{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;By analyzing the given, we know that a = 3 and b = 2{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Follow the steps again.{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Amplitude: {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; a = 3 &#8594;<Text style={stylesVar.bold}> -3 &#60; y &#60; 3</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Period: {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; i. p = 2&#960;/b = 2&#960;/2 = <Text style={stylesVar.bold}>&#960;</Text> {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; ii. p/4 =<Text style={stylesVar.bold}> &#960;/4, &#960;/2 , 3&#960;/4 , &#960;</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Coordinates: {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | -&#960;/4 |&nbsp;&nbsp; 0 &nbsp;&nbsp;| &#960;/4 | &#960;/2 | 3&#960;/4 |&nbsp;&nbsp; &#960; &nbsp;&nbsp;| 5&#960;/4 {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp; 3sin 2x &nbsp;|&nbsp;&nbsp;-3 &nbsp;&nbsp;|&nbsp;&nbsp; 0 &nbsp;&nbsp;|&nbsp;&nbsp; 3 &nbsp;&nbsp;|&nbsp;&nbsp; 0 &nbsp;&nbsp;|&nbsp;&nbsp;-3 &nbsp;&nbsp; |&nbsp;&nbsp; 0 &nbsp;&nbsp; | &nbsp;&nbsp;3{"\n"}{"\n"} 
        &nbsp;&nbsp;&nbsp;&nbsp;The Coordinates are:<Text style={stylesVar.bold}> (-&#960;/4 , -3) , (0, 0) , (&#960;/4, 3) ,(&#960;/2 , 0) , (3&#960;/4, -3) , (&#960;, 0) , (5&#960;/4, 3)</Text>{"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;Graph. {"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Image source={require('./graphing_sine_curve_graph_6.png')}  style={{width: width, height: height1}} />
        <Text>
        {"\n"}{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>D&#123;x/x &#949; R&#125;</Text> -  Domain is x such that x is any Real numbers {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>R&#123;-1&#60; y &#60;1&#125;</Text> - Range is y is greater than -3 and less than positive 3{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>
        </View>

        </View>
      </ScrollView>
    );
  }
}

class LimitOfAFunctionScreen extends React.Component {
  render() {
    return ( 
    <ScrollView style={{marginTop: 3}}>
      <View style={{marginHorizontal:12}}>
      <Text>f(x) = x + 2 as x near 2 {'\n'}</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 50}}>
            <Text>x</Text>
            <Text>1.5</Text>
            <Text>1.6</Text>
            <Text>1.7</Text>
            <Text>1.8</Text>
            <Text>1/9</Text>
            <Text>1.99</Text>
            <Text>1.999</Text>
         </View>
         <View style={{width: 50}}>
            <Text>f(x)</Text>
            <Text>3.5</Text>
            <Text>3.6</Text>
            <Text>3.7</Text>
            <Text>3.8</Text>
            <Text>3.9</Text>
            <Text>3.99</Text>
            <Text>3.999</Text>
         </View>
        </View>
        <View style={{width:100, height:1,backgroundColor:'#000'}}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 50}}>
            <Text>2.01</Text>
            <Text>2.5</Text>
         </View>
         <View style={{width: 50}}>
            <Text>4.01</Text>
            <Text>4.5</Text>
         </View>
        </View>
        <Text>
          {'\n'}
          lim f(x) = lim{'\n'}
          x &#8594; a
          {'\n'}
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 150}}>
            <Text>
              lim x + 2 = l{'\n'}
              x &#8594; 2
            </Text>
         </View>
         <View style={{width: 150}}>
            <Text>
              x + 2 = 4
            </Text>
         </View>
        </View>
        <Text>{'\n'}
          Epsilon-Delta Argument{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#1013; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&#8706;{'\n'}
          {'\n'}0	&#60; |x-9|	&#60; &#8706;  &#8594; |f(x)-L|	&#60; &#1013;{'\n'}{'\n'}
        </Text>
        <Text>
          0	&#60; |x-4|	&#60; 8 &#8592; |(5x-7)-13|	&#60; &#1013;
        </Text>
        <View style={{width:75, height:1,backgroundColor:'#000'}}/>
        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;|x-4| &#60; &#1013; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8706; = &#1013;
        </Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width:53, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}/>
          <View style={{width:30, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:53, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
          <View style={{width:30, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
        </View>
        <View style={{width: 150}}>
            <Text>
              {'\n\n'}
              lim (5x-7) = 13{'\n'}
              x &#8594; 4
            </Text>
         </View>
         <Text>
           {'\n'}Step 1. Find the formula for &#8706; in the terms of &#1013;{'\n'}{'\n'}
         </Text>
         <Text>
        |(5x-7)-13| &#60; &#1013;
        </Text>
        <Text>
        |5x-20| &#60; &#1013;
        </Text>
        <Text>
        5|x-4| &#60; &#1013;
        </Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width:40, height:1,backgroundColor:'#000'}}/>
          <View style={{width:8, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
          <View style={{width:25, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
        </View>
        <Text style={{marginTop:15}}>
        |x-4| &#60; &#1013;
        </Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width:40, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:0, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text></Text>
          </View>
          <View style={{width:16, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:0, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
        </View>
        <Text>
           {'\n'}{'\n'}Step 2.{'\n'}{'\n'}
         </Text>
        <Text>
        0&#60;|x-4| &#60;	&#8706;
        </Text>
        <Text>
        5(0&#60;|x-4| &#60;	&#1013;) 5
        </Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width:60, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:8, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text></Text>
          </View>
          <View style={{width:45, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}>
            <Text>5</Text>
          </View>
        </View>
        <Text style={{marginTop:15}}>
        0&#60;5|x-4| &#60;	&#1013;{'\n'}
        0&#60;|5x-20| &#60;	&#1013;{'\n'}
        0&#60;|(5x-7)-13| &#60;	&#1013;{'\n'}
        </Text>

        <View style={{width: 150}}>
            <Text>
              {'\n\n'}
              lim (2x-4) = 10{'\n'}
              x &#8594; 4
            </Text>
         </View>
         <Text>
           {'\n'}Step 1.{'\n'}{'\n'}
           |(2x+4)-10| &#60; &#1013;{'\n'}
           |(2x+6)| &#60; &#1013;{'\n'}
           2|x-3| &#60; &#1013;{'\n'}
         </Text>

         <View style={{flexDirection:'row'}}>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:25, height:1,backgroundColor:'#000'}}>
            <Text style={{marginStart:10}}>2</Text>
          </View>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}>
            <Text>2</Text>
          </View>
        </View>

        <Text>{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x-3 &#60; &#1013;{'\n'}
         </Text>

         <View style={{flexDirection:'row'}}>
          <View style={{width:10, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:25, height:1,backgroundColor:'#000'}}>
            <Text style={{marginStart:10}}>2</Text>
          </View>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}>
            <Text>2</Text>
          </View>
        </View>

        <Text>{'\n'}{'\n'}
          Step 2.{'\n'}{'\n'}
          0	&#60; |x-3|	&#60; &#8706;{'\n'}
    2(0	&#60; |x-3|	&#60; &#1013;)2{'\n'}
        </Text>

        <View style={{flexDirection:'row'}}>
          <View style={{width:35, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:25, height:1,backgroundColor:'#fff'}}>
            <Text style={{marginStart:10}}></Text>
          </View>
          <View style={{width:15, height:1,backgroundColor:'#fff'}}/>
          <View style={{width:10, height:1,backgroundColor:'#000'}}>
            <Text>2</Text>
          </View>
        </View>

        <Text>{'\n'}
          0	&#60; 2|x-3|	&#60; &#1013;{'\n'}
          0	&#60; |2x-6|	&#60; &#1013;{'\n'}
          0	&#60; |(2x-4)-10|	&#60; &#1013;{'\n'}
        </Text>
      </View>
    </ScrollView>
    );
  }
}

class ContinuityScreen extends React.Component {
  render() {
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );

    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>

        <Text>
        1. f(x)= 3x-x&#179; ; x=4 {"\n"}{"\n"}
        a. f(x)= 3x-x&#179; {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;f(4)= 3(4)-4&#179;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 12-64 {"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;f(4)= 52  
        &nbsp;&nbsp;&nbsp;Defined{"\n"}{"\n"}
        b. lim f(x)= 3x-x&#179;{"\n"}
        &nbsp;&nbsp;&nbsp;x&#8594;4&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;= 3(4)-4&#179;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;limf(x) = -52{"\n"}{"\n"}
        c. lim f(x)=f(4){"\n"}
        &nbsp;&nbsp;&nbsp;x&#8594;4{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;52= -52
        &nbsp; &nbsp; &nbsp; &nbsp;
        {"\n"} {"\n"}{"\n"}
            2.f(x)= <Text style={stylesVar.underline}> x&#178;-4 </Text> 
            &nbsp;&nbsp;&nbsp;&nbsp;x=2        
            {"\n"}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            x-2
            {"\n"} {"\n"}         
            a. f(2)= <Text style={stylesVar.underline}> 2&#178;-4 </Text>
            = <Text style={stylesVar.underline}> 4-4 </Text> 
            = <Text style={stylesVar.underline}> 0 </Text>{"\n"}  
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2-2 
            &nbsp; &nbsp;  &nbsp;&nbsp; 0  &nbsp; &nbsp;  0 &nbsp; &nbsp; &nbsp;
            Undefined
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;f(x)=   
            <Text style={stylesVar.underline}>           2         </Text>
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;(3x+1)(x+2)
            {"\n"}{"\n"}
            3x+1= 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;x+2= 0{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x= -1  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x= -2{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x= <Text style={stylesVar.underline}> -1 </Text>{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
            {"\n"}{"\n"}{"\n"}
            3. g(x)&#123; x+1, if x&#8804;0 {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;, 
            if x&#62;0
            {"\n"}{"\n"}
            a. g(0)= x+1= 0=1= 1
            {"\n"}{"\n"}
            b. lim g(x)= 0+1= 1{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;0
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lim g(x)= 2= 0{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;0
            {"\n"}{"\n"}
            c.lim g(x)= g(0){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;0
            {"\n"}{"\n"}{"\n"}
            4. f(x)= x {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;2&#8314;
            {"\n"}{"\n"}
            a. f(2)= x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;f(2)= 2
            {"\n"}{"\n"}
            b. lim f(x)= x= 2{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;2&#8314;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*2.1 &#60; x &#62; 2
            {"\n"}{"\n"}
            c. lim f(x)= f(x){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;2= 2
            {"\n"}{"\n"}
            5. f(x)= x{"\n"}
            x&#8594;2&#8315;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*2 &#62; x &#60; 1.9
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x= 1 {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x= 2
            {"\n"}{"\n"}{"\n"}
            6. h(x)= x&#178;-x-6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-4,0]{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(-4)= (-4)&#178;-(-4)-6{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 16+4-6{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 14
            {"\n"}{"\n"}
            f(0)= -6{"\n"}
            f(-4)&#8800; f(0)= 14&#8800; -6 {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*h(0)&#60; 0 &#60;h(-4){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;-x-6= 0
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h(0)= 0 {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(x-3) &nbsp;&nbsp;&nbsp;(x+2)
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h(-2)= 0  {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x= 3 &nbsp;&nbsp;&nbsp; x= -2
        </Text>
        </View>
      </ScrollView>
    );
  }
}

class DerivativeScreen extends React.Component {
  render() {
    var width = Dimensions.get('window').width - 48;
    var height = (100 * width / 100)-48;
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>

          <Text>
            Derivative{'\n'}
            - The first derivative of a function at the point is the slope of the tangent to the
            curve of that function at that point.{'\n'}{'\n'}
          </Text>

          <Image source={require('./derivative_graph_1.jpg')}  style={{width: width, height: height}} />

          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>m =&nbsp;</Text>
            <View>
              <Text style={{textDecoration:'underline'}}>rise</Text>
              <Text>run</Text>
            </View>
            <Text> =&nbsp;</Text>
            <View>
              <Text style={{textDecoration:'underline'}}>Y&#8322; - Y&#8321;</Text>
              <Text>X&#8322; - X&#8321;</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;</Text>
            <View>
              <Text style={{textDecoration:'underline'}}>&#916; Y</Text>
              <Text>&#916; X</Text>
            </View>
          </View>

          <Text>{'\n'}Secant:{'\n'}{'\n'}</Text>
          <Text style={{textDecorationLine:'underline'}}>
            f (x + &#916;x) - f(x)
          </Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>

          <Text>{'\n'}Tangent:{'\n'}{'\n'}</Text>

          <View style={{flexDirection:'row'}}>
            <View>
              <Text>
                lim
              </Text>
              <Text style={{fontSize:7}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text>&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                f(x + &#916;x) - f(x)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>

          <Text>{'\n'}
            Four steps in finding the derivative{'\n'}
            1. Consider the function Y = f(x){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find
            f(x + &#916;) by replacing{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x by x + &#916;x in the function{'\n'}
            2. Find f(x + &#916;x) - f(x){'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>3. Divide by &#916;x to obtain </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                f (x + &#916;x) - f(x)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>
          <Text>4. Find the limit as &#916;x approaches to 0</Text>
          <View style={{flexDirection:'row'}}>
            <Text>5.) To obtain f(x) =&nbsp;</Text>
            <View>
              <Text>
                lim
              </Text>
              <Text style={{fontSize:7}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text>&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                f(x + &#916;x) - f(x)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>


          <Text>{'\n'}
            ex.{'\n'}{'\n'}
            1.) f(x) = x{'\n'}
            Step 1.{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x+&#916;x) = x + &#916;x{'\n'}
            Step 2.{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x+&#916;) - f(x) =
            x + &#916;x - x{'\n'}
            Step 3.{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>f(x + &#916;x) - f(x)</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;=&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&#916;x</Text>
              <Text>&#916;x</Text>
            </View>
          </View>

          <Text>
            Step 4.{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <View>
              <Text>
                lim
              </Text>
              <Text style={{fontSize:7}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text>&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>f(x + &#916;x) - f(x)</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;=&nbsp;&nbsp;</Text>
            <View>
              <Text style={{marginTop:7}}>1</Text>
            </View>
          </View>

          <Text>{'\n'}
            2.) f(x) = 4x + 3{'\n'}
            Step 1.{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x+&#916;x) = 4(x+&#916;x) + 3{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x+&#916;x) = 4x + 4&#916;x + 3{'\n'}
            Step 2.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4x + 4&#916;x + 3 - (4x+3){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =&nbsp;
            <Text style={{textDecorationLine: 'line-through'}}>4x</Text>
             + 4&#916;x + 
            <Text style={{textDecorationLine: 'line-through'}}>3</Text>
              &nbsp;-&nbsp;
              <Text style={{textDecorationLine: 'line-through'}}>4x</Text>
              &nbsp;+&nbsp;
              <Text style={{textDecorationLine: 'line-through'}}>3</Text>  
            {'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            Step 3.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>4 &#916;x</Text>
              <Text>&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>
          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =&nbsp; 4
          </Text>

          <Text>
            Step 4.{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <View>
              <Text>
                lim
              </Text>
              <Text style={{fontSize:7}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text>&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>f(x + &#916;x) - f(x)</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;=&nbsp;&nbsp;</Text>
            <View>
              <Text style={{marginTop:7}}>4</Text>
            </View>
          </View>


          <Text>{'\n'}
            3.) f(x) = x&#178;+1{'\n'}
            Step 1 & 2.{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x+&#916;x) - f(x) =
            (x + &#916;x)&#178; + 1 - (x&#178;+1)
            {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            <Text style={{textDecorationLine: 'line-through'}}>x&#178;</Text>
            &nbsp;+ 2x &#916;x + (&#916;x)&#178;&nbsp; 
            <Text style={{textDecorationLine: 'line-through'}}>+ 1</Text>
            &nbsp;
            <Text style={{textDecorationLine: 'line-through'}}>- x&#178;</Text>
            &nbsp;
            <Text style={{textDecorationLine: 'line-through'}}>- 1</Text>
            {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2x&#916;x + (&#916;x)&#178;
            {'\n'}
            Step 3.{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>f(x+&#916;) - f(x)</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                2x&#916;x + (&#916;x)&#178;
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{padding:7}}>/</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                2x&#916;x
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>

            <Text style={{marginTop:7}}>&nbsp;+&nbsp;</Text>


            <View>
              <Text style={{textDecorationLine:'underline'}}>
                (&#916;x)&#178;
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
          </View>

          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2x + &#916;x
          </Text>

          <Text>
            Step 4.{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <View>
              <Text>
                lim
              </Text>
              <Text style={{fontSize:7}}>
              &#916; x&#8594;0
              </Text>
            </View>
            <Text>&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>f(x + &#916;x) - f(x)</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#916;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;=&nbsp;&nbsp;{'\n'}{'\n'}
            &nbsp;&nbsp;=&nbsp;&nbsp;
            </Text>
            <View>
              <Text style={{marginTop:7}}>2x + 0{'\n'}{'\n'}2x</Text>
            </View>
          </View>

          <Text>
            {'\n\n'}
            Squared of binomial{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 1st term{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b = 2nd term{'\n'}{'\n'}
            (a+b)&#178; = a&#178; + 2ab + b&#178;
          </Text>
          <Text>
            {'\n\n'}
            Cube of binomial{'\n'}
            (a+b)&#179; = a&#179; + 3a&#178;b + 3ab&#178; + b&#179;{'\n'}
            (a-b)&#179; = a&#179; - 3a&#178;b + 3ab&#178; - b&#179;{'\n'}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

class DifferentiationRuleScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>

        <Text>
            Differentiation Rule{'\n'}
            &#8594; Mathematical process of obtaining derivatives{'\n'}{'\n'}
            1.) Constant Rule{'\n'}{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                &nbsp;d&nbsp;
              </Text>
              <Text>
                du
              </Text>
            </View>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text style={{marginTop:7}}>
              c = 0
            </Text>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                &nbsp;d&nbsp;
              </Text>
              <Text>
                du
              </Text>
            </View>
            <Text>&nbsp;</Text>
            <Text style={{marginTop:7}}>
              = derivative
            </Text>
          </View>
          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c = constant
          </Text>

          <Text>
            ex.{'\n\n'}
            1.) f(x) = 5{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d|dx = 0{'\n'}{'\n'}
            2.) f(x) = 8{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d|dx = 0{'\n'}{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <Text>
              3.) y =&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>3</Text>
              <Text>7</Text>
            </View>
          </View>
          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = 0
          </Text>

          <Text>{'\n'}
            2) Power Rule{'\n'}{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;d&nbsp;&nbsp;</Text>
              <Text>du</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;u&#8319; = nu&#8319;&#8315;&#185;</Text>
          </View>

          <Text>{'\n'}
            ex.{'\n'}{'\n'}
            1.) f(x) = x&#8309;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d|dx = 5x&#8309;&#8315;&#185; = 5x&#8308;
          </Text>


          <Text>{'\n'}
            2.) f(x) = x&#8315;&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d|dx = -2x&#8315;&#178;&#8315;&#185;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -2x&#8315;&#179;
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                -2
              </Text>
              <Text>
                x&#179;
              </Text>
            </View>
          </View>

          <Text>{'\n'}
            3.) y = &#179;&#8730;x{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = x</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <View>
              <Text style={{fontSize:5, marginTop:3}}>&nbsp;-&nbsp;</Text>
            </View>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>3</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>3</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;x</Text>

            <View style={{marginTop:7}}>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <View style={{marginTop:7}}>
              <Text style={{fontSize:5, marginTop:3}}>&nbsp;-&nbsp;</Text>
            </View>
            <View style={{marginTop:7}}>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>3</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>3</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;x</Text>

            <View style={{marginTop:7}}>
              <Text style={{fontSize:5, marginTop:3}}>&nbsp;-&nbsp;</Text>
            </View>
            <View style={{marginTop:7}}>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;1&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                
            <Text>3x</Text>
<View>
  <Text style={{fontSize:5, marginTop:3}}>&nbsp;-&nbsp;</Text>
</View>
<View>
  <Text style={{textDecorationLine:'underline', fontSize:5}}>2</Text>
  <Text style={{fontSize:5}}>3</Text>
</View>
              </View>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;1&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                
            <Text>3x</Text>
<View>
  <Text style={{fontSize:5, marginTop:3}}>&nbsp;-&nbsp;</Text>
</View>
<View>
  <Text style={{textDecorationLine:'underline', fontSize:5}}>2</Text>
  <Text style={{fontSize:5}}>3</Text>
</View>
              </View>
            </View>

            <Text style={{marginTop:7}}>&nbsp;•&nbsp;</Text>

            <View>
              <Text style={{textDecorationLine:'underline'}}>&#179;&#8730;x</Text>
              <Text>&#179;&#8730;x</Text>
            </View>

            <Text style={{marginTop:7}}>&nbsp;=&nbsp;</Text>
            
            <View>
              <Text style={{textDecorationLine:'underline'}}>&#179;&#8730;x</Text>
              <Text>&nbsp;3x</Text>
            </View>

          </View>


          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              4.) f(x) =&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>x&#179;</Text>
            </View>
          </View>
          
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = x&#8315;&#179;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -3x&#8315;&#179;&#8315;&#185;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -3x&#8315;&#8308;{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>-3</Text>
              <Text>x&#8308;</Text>
            </View>
          </View>

          <Text>{'\n'}</Text>

          <Text>
            3.) Constant Multiple{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d | du cu = c
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>&nbsp;d&nbsp;</Text>
              <Text style={{fontSize:5}}>du</Text>
            </View>
            <Text>&nbsp;u</Text>
          </View>
          <Text>{'\n'}
            ex.{'\n'}{'\n'}
            1.) y = 4x&#8309;
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = 4&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:7}}>&nbsp;d&nbsp;</Text>
              <Text style={{fontSize:7}}>dx</Text>
            </View>
            <Text>&nbsp;x&#8309;</Text>
          </View>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4(5x&#8308;)</Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = 20x&#8308;)</Text>


          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            2.) y =&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>6</Text>
            </View>
            <Text>&nbsp;</Text>
            <View style={{marginTop:7}}>
              <Text style={{textDecorationLine:'underline', fontSize:7}}>&nbsp;d&nbsp;</Text>
              <Text style={{fontSize:7}}>dx</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;x&#179;</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>6</Text>
            </View>
            <Text>&nbsp;</Text>
            <Text style={{marginTop:7}}>&nbsp;(3x&#178;)</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y =&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>2</Text>
            </View>
            <Text style={{marginTop:7}}>x&#178;&nbsp;&nbsp;or&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>x&#178;</Text>
              <Text>&nbsp;2</Text>
            </View>
          </View>

          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>3.) y = -3x</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>5</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = -3</Text>
            <Text>&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:7}}>&nbsp;d&nbsp;</Text>
              <Text style={{fontSize:7}}>dx</Text>
            </View>
            <Text>&nbsp;x</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>5</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -3</Text>
            <Text>(</Text>
            <View>
              <Text style={{fontSize:7, textDecorationLine:'underline'}}>5</Text>
              <Text style={{fontSize:7}}>3</Text>
            </View>
            <Text>&nbsp;x&nbsp;</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>)</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = -5x</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>

          <Text>{'\n'}</Text>
          <Text>
            4.) y = 6 &#8308;&#8730;x
          </Text>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 6x</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>4</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 6</Text>
            <Text>&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:5}}>&nbsp;d&nbsp;</Text>
              <Text style={{fontSize:5}}>dx</Text>
            </View>
            <Text>&nbsp;</Text>
            <Text style={{fontSize:10,marginTop:0}}>x</Text>
            <View>
              <Text style={{fontSize:3, textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:3}}>4</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 6</Text>
            <Text>&nbsp;(</Text>
            <View>
              <Text style={{textDecorationLine:'underline', fontSize:7}}>1</Text>
              <Text style={{fontSize:7}}>4</Text>
            </View>
            <Text>&nbsp;</Text>
            <Text style={{fontSize:10,marginTop:0}}>x</Text>
            <View>
              <Text style={{fontSize:3, textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:3}}>4</Text>
            </View>
            <View>
              <Text style={{fontSize:3, marginTop:3}}>&nbsp;- 1</Text>
            </View>
            <Text>)</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>2</Text>
              <Text>3</Text>
            </View>
            <View style={{marginTop:7, flexDirection:'row'}}>
            <Text>&nbsp;</Text>
            <Text style={{fontSize:10,marginTop:0}}>x</Text>
            <View>
              <Text style={{fontSize:3, textDecorationLine:'underline'}}>-3</Text>
              <Text style={{fontSize:3}}>&nbsp;4</Text>
            </View>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;3&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>2x</Text>
                <View>
                  <Text style={{fontSize:5, textDecorationLine:'underline'}}>3</Text>
                  <Text style={{fontSize:5}}>4</Text>
                </View>
              </View>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>2 &#8308;&#8730;x&#179;</Text>
              </View>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&#8308;&#8730;x</Text>
              <Text>&#8308;&#8730;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;=&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}> 3	&#8308;&#8730;x</Text>
              <Text>&nbsp;&nbsp;&nbsp;2x</Text>
            </View>
          </View>

          <Text>{'\n'}</Text>

          <View style={{flexDirection:'row'}}>
            <Text>5.) y = 10x</Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 10
              d|dx x
            </Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 10
              (
            </Text>
            <View>
              <Text style={{fontSize:7}}>2</Text>
              <Text style={{fontSize:7}}>3</Text>
            </View>
            <Text style={{fontSize:7}}>&nbsp;x</Text>
            <View>
              <Text style={{fontSize:3, textDecorationLine:'underline'}}>-1</Text>
              <Text style={{fontSize:3}}>&nbsp;3</Text>
            </View>
            <Text>)</Text>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;20&nbsp;&nbsp;</Text>
              <Text>3x&#8315;&#185;</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;20&nbsp;&nbsp;</Text>
              <Text>3 &#179;&#8730;x</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&#179;&#8730;x&#178;</Text>
              <Text>&#179;&#8730;x&#178;</Text>
            </View>
          </View>
          
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>20 &#179;&#8730;x&#178;</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x</Text>
            </View>
          </View>


          <Text>{'\n'}</Text>
          <Text>
            4.) Sum and derivative{'\n'}{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>du</Text>
              <Text>dv</Text>
            </View>
            <Text>&nbsp;</Text>
            <Text> u&#177;v =&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;d&nbsp;&nbsp;</Text>
              <Text>du</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;u&nbsp;</Text>
            <Text>&#177;</Text>
            <Text>&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>d</Text>
              <Text>v</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&nbsp;v</Text>
          </View>

          <Text>{'\n'}
            1.) y = 4x&#8309; + 3x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = 4x&#8309;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v = 3x&#178;
          </Text>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = d/dx 4x&#8309;
            + d/dx 3x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4 d/dx
            4x&#179; + 3 d/dx x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4
            (5x&#8309;&#8315;&#185;) + 3 (2x&#178;&#8315;&#185;){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 20x&#8308; + 6
          </Text>
          
          <Text>{'\n'}
          2.) y = 5x&#178; + 3x + 2{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 10x + 3
          </Text>

          <Text>{'\n'}
          3.) 3x&#8309; - 4x&#8308; + 3x&#179; - 5x + 8{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-15x&#8308; - 16x&#179; + x&#178; - 5
          </Text>

          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>4.) y = 3x</Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>2</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;+&nbsp;</Text>
            <Text>
              4x
            </Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;- 9</Text>
          </View>
          
          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= d|dx 3x
            </Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>2</Text>
            </View>
            <Text>&nbsp;+&nbsp;d|dx 4x</Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;- d|dx 9</Text>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3 d|dx x
            </Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>2</Text>
            </View>
            <Text>&nbsp;+&nbsp;4 d|dx x</Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;+ 0</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3 (
            </Text>
            <View>
              <Text style={{fontSize:8, textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:8}}>2</Text>
            </View>
            <Text style={{fontSize:8,marginTop:3}}>&nbsp;x</Text>
            <View>
              <Text style={{fontSize:4,textDecorationLine:'underline'}}>-1</Text>
              <Text style={{fontSize:4}}>&nbsp;2</Text>
            </View>
            <Text>)</Text>
            <Text>&nbsp;+&nbsp;4 d|dx x</Text>
            <View>
              <Text style={{fontSize:5,textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>3</Text>
            </View>
            <Text>&nbsp;+ 0</Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;3&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>2x</Text>
          <View>
              <Text style={{fontSize:4,textDecorationLine:'underline'}}>-1</Text>
              <Text style={{fontSize:4}}>&nbsp;2</Text>
            </View>
              </View>
            </View>
            <Text style={{marginTop:7}}>&nbsp;+&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;4&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>3x</Text>
          <View>
              <Text style={{fontSize:4,textDecorationLine:'underline'}}>-2</Text>
              <Text style={{fontSize:4}}>&nbsp;3</Text>
            </View>
              </View>
            </View>

          </View>


          <View style={{flexDirection:'row'}}>
          <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;3&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>2&#8730;x</Text>

              </View>
            </View>
            <Text style={{marginTop:7}}>&nbsp;+&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <View style={{flexDirection:'row'}}>
                <Text>3 &#179;&#8730;x</Text>
              </View>
            </View>

          </View>

          <View style={{flexDirection:'row'}}>
          <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>3&#8730;x</Text>
              <View style={{flexDirection:'row'}}>
                <Text>&nbsp;&nbsp;2x</Text>

              </View>
            </View>
            <Text style={{marginTop:7}}>&nbsp;+&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>4 &#179;&#8730;x</Text>
              <View style={{flexDirection:'row'}}>
                <Text>&nbsp;&nbsp;&nbsp;3x</Text>
              </View>
            </View>

          </View>
          <Text>{'\n'}
            General Power Rule{'\n'}{'\n'}
            d|dx [f(x)]&#8319; = n[f(x)]&#8319;&#8315;&#185; d|dx f(x){'\n\n'}
            ex.{'\n\n'}
            1.) f(x) = (x&#179;+5)&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x) = 2(3x&#179;+5)&#178;&#8315;&#185;
            d|dx (x&#179;+5){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            2(x&#179;+5)(3x&#178;){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            (2x&#179;+10) 3x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            6x&#8309;+30x&#178;
          </Text>
          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              2.) y =&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text>x&#179;+4x</Text>
            </View>
          </View>
          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d|dy = (x&#179; 1 - 4x)&#8315;&#185; {'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
          -1 (x&#179;+4x)&#8315;&#178; (3x&#178;+4){'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1&nbsp;</Text>
            <Text style={{marginTop:7}}>[</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text>(x&#179;+4x)</Text>
            </View>
            <Text style={{marginTop:7}}>] (3x&#178; + 4)</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>-3x&#178;-4</Text>
            <Text>(x&#179;+4x)&#178;</Text>
          </View>
          </View>

          <Text>{'\n'}
            3.) y = &#8730;1-x&#178;{'\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (1-x&#178;)
            </Text>
            <View>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>1</Text>
              <Text style={{fontSize:5}}>2</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>2</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;(1-x&#178;)</Text>
            <View style={{marginTop:7}}>
              <Text style={{fontSize:5, textDecorationLine:'underline'}}>-1</Text>
              <Text style={{fontSize:5}}>&nbsp;2</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;(-2x)</Text>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>2</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;(</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text>&#8730;1-x&#178;</Text>
            </View>
            <Text style={{marginTop:7}}>)&nbsp;</Text>
            <Text style={{marginTop:7}}>&nbsp;(-2x)</Text>
          </View>
         
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;-2x&nbsp;&nbsp;&nbsp;</Text>
              <Text>2 &#8730;1-x&#178;</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;•&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&#8730;1-x&#178;</Text>
              <Text>&#8730;1-x&#178;</Text>
            </View>
          </View>



          
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>-2x&#8730;1-x&#178;</Text>
              <Text>&nbsp;&nbsp;2(1-x&#178;)</Text>
            </View>
            <Text style={{marginTop:7}}>&nbsp;&#8594;&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;-x&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text>&#8730;1-x&#178;</Text>
            </View>
          </View>
          
          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>-2x&#8730;1-x&#178;</Text>
              <Text>&nbsp;&nbsp;&nbsp;2-2x&#178;</Text>
            </View>
          </View>

          <Text>{'\n'}
            Product Rule{'\n\n'}
            u = 1st function{'\n'}
            v = 2nd function{'\n\n'}
            d|dx uv = u d|dx v + v d|dx u{'\n\n'}
            ex. f(x) = 3x (x&#179;+5){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = 3x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v = x&#179;+5{'\n'}
            d|dx uv = u d|dx v + v d|dx u{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3x (3x&#178;) +
            (x&#179;+5) (3){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 9x&#179; +
            3x&#179; + 15{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 12x&#179; + 15{'\n\n'}
            2.) f(x) = (3x&#178;-5) (x&#179;+3){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x) = 3x&#178;-5 d/dx (x&#179;+3) + (x&#179;+3) d|dx (3x&#178;-5){'\n'} 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3x&#178;-5 (3x&#178;) + (x&#179;+3) (6x){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 9x&#8308; - 15x&#178; + 6x&#8308; + 18x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 15x&#8308; - 15x&#178; + 18x
          </Text>

          <Text>{'\n'}
            3.) f(x) = 4x&#178; (3x&#179;-8){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            12x&#179; - 3x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            60x&#8308; - 64x{'\n\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            4x&#178; d|dx (3x&#179;-8) + (3x&#179;-8) d|dx (4x&#178;){'\n'}{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            4x&#178; (9x&#178;) + (3x&#179;-8) (8x){'\n'}{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            36x&#8308; + 24x&#8308; - 64x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            60x&#8308; - 64x
          </Text>

          <Text>{'\n'}
            Quotient Rule{'\n\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>d|dx&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>u</Text>
              <Text>v</Text>
            </View>
            <Text>&nbsp;=&nbsp;</Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>v d|dx u - u d|dx v</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;v&#178;</Text>
            </View>
          </View>
          <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = first function{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v = second function{'\n\n'}
          ex.{'\n\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              1.) f(x) =&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;x&#178;&nbsp;&nbsp;</Text>
              <Text>4x+3</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                (4x+3) d|dx (x&#178;) - x d|dx (4x+3)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;(4x+3)&#178;</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                (4x+3)(2) - x&#178; (4)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;
                16x&#178;+24x+9
              </Text>
            </View>
          </View>



          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
              &nbsp;8x&#178;+6x-4x&#178;&nbsp;
              </Text>
              <Text>
                16x&#178;+24x+9
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4x&#178;+6x&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Text>
                16x&#178;+24x+9
              </Text>
            </View>
          </View>

          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row'}}>
            <Text>
              2.) g(x) =&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>x&#178;-3</Text>
              <Text>2x+6</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                (2x+6) d|dx (x&#178;-3x) - x&#178;-3x d|dx (2x+6)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2x+6)&#178;</Text>
            </View>
          </View>




          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                (2x+6) (2x-3x) - x&#178;+3x (2)
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;4x&#178;+24x+36</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                4x&#178;-6+12x-18-2x&#178;+6x
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4x&#178;+24x+36</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>

          <View style={{flexDirection:'row'}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                2x&#178;+12x-18
              </Text>
              <Text>
                4x&#178;+24x+36</Text>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:7}}>
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; 
            </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                2x&#178;+12x-18
              </Text>
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;(2x+6)&#178;
              </Text>
            </View>
          </View>

          </View>
        </View>
      </ScrollView>
    );
  }
}

class LeibnizsNotationScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
        <Text>
          Leibniz's Notation{'\n'}{'\n'}
        </Text>
        <View style={{flexDirection:'row'}}>
          
        <View>
          <Text style={{textDecorationLine:'underline'}}>
              dy
            </Text>
            <Text>
              dx
            </Text>
          </View>
          
          <View><Text>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
        
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              &nbsp;d&nbsp;
            </Text>
            <Text>
              dx
            </Text>
          </View>

          <View><Text>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
        
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              df
            </Text>
            <Text>
              dx
            </Text>
          </View>

          <View><Text>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
        
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              d f(x)
            </Text>
            <Text>
            &nbsp;&nbsp;dx
            </Text>
          </View>

          <View><Text>&nbsp;&nbsp;,&nbsp;&nbsp;</Text></View>
        
          <View>
            <Text style={{textDecorationLine:'underline'}}>
            &nbsp;d&nbsp;
            </Text>
            <Text>
            dx
            </Text>
          </View>
          <View style={{marginTop:8}}><Text>&nbsp;f(x)</Text></View>
        

        </View>

        <Text>{'\n'}
          f(x) &#8594; Lagranges's notation{'\n'}
          df &#8594; Eulers's notation
        </Text>
        
        <Text>{'\n'}Chain Rule{'\n'}{'\n'}</Text>
        <View style={{flexDirection:'row'}}>
          <Text>f&#7590;(x) = n[f(x)]</Text>
          <View>
            <Text style={{fontSize:8}}>n-1&nbsp;</Text>
          </View>
          <View>
            <Text style={{fontSize:8, textDecorationLine:'underline'}}>d</Text>
            <Text style={{fontSize:8}}>x</Text>
          </View>
          <Text>&nbsp;f(x)</Text>
          
        </View>

        <Text>
          {'\n'}
        </Text>


        <Text>
          Higher derivative {'\n'}{'\n'}
        </Text>
        <Text style={{textDecorationLine:'underline'}}>
          &nbsp;d&#178;&nbsp;
        </Text>
        <Text>
          d&#178;x{'\n\n'}
        </Text>
        <Text>
          f(x) = 3x&#178; + 2x - 1 &nbsp;&nbsp;&nbsp;&nbsp; y&#7590;&#7590;&#7590;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = 6x + 2{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;y&#7590;&#7590; = 6{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;y&#7590;&#7590;&#7590; = 0{'\n'}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text>
            f(x) =&nbsp;
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;x&#178;&nbsp;</Text>
            <Text>2&#8730;x</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              (2&#8730;x)(2x) - x&#178; (x&#189;)
            </Text>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4x
            </Text>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              4x &#8730;x - x&#189;
            </Text>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4x
            </Text>
          </View>
        </View>

        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;[4x [4x(&#189;x&#189;] - x&#189;] - [
        </Text>

        <View style={{flexDirection:'row'}}>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              4x &#8730;x - x&#189;
            </Text>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4x
            </Text>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              &#123;4x [4x&#189; x&#189;) + x&#189; + &#189;x&#189;} -  &#123;4x &#8730;x - x&#189;(4)]
            </Text>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16x&#178;
            </Text>
          </View>
        </View>


        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
          <Text style={{textDecorationLine:'underline'}}> 
          [4x (2x&#189;) + 4x&#189; + &#189;x&#189;] - 
          [ 16x &#8730;x - 4x -&#189;] </Text> {'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;16x	&#178;{'\n'}
          &nbsp;
          </Text> 
          <Text> 
          </Text>

          <View style={{flexDirection:'row',marginTop:-15}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=</Text>
            <View>
              <View style={{flexDirection:'row'}}>
                <Text>&nbsp;8x</Text>
                <View>
                  <Text style={{fontSize:8}}>3/2</Text>
                </View>
                <Text>+ 9/2 x&#189;  - 16x  &#8730;x + 4x-&#189;</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row', marginTop:-15}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text style={{textDecorationLine:'underline'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp; {'\n'}
            </Text>
          </View>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16x&#178;</Text>
    
          <Text>
          {'\n'}   {'\n'}  
          Chain Rule
          {'\n'}  {'\n'}  

          &nbsp; &nbsp;f(x)= (x+1)&#179; (2x+2)&#8308;{'\n'} 
          &nbsp; &nbsp; &nbsp; &nbsp; = (x+1)&#179; d/dx
          (2x+2)&#8308; + (2x+2)&#8308; d/dx (x+1)&#179; {'\n'} 
          &nbsp; &nbsp; &nbsp; &nbsp; = (x+1)&#179; 4(2x+2)&#179; 
          d/dx (2x+2) + (2x+2)&#8308; 3(x+1)&#178; d/dx (x+1); {'\n'} 
          &nbsp; &nbsp; &nbsp; &nbsp; = (x+1)&#179; (4)(2x+2)&#179; 
          (2) + (2x+2)&#8308; 3(x+1)&#178; (1){'\n'} 
          &nbsp; &nbsp;f(x)= 8(x+1)&#179;(2x+2)&#179; + 3(2x+2)&#8308;
          (x+1)&#178;
          {'\n'} {'\n'} {'\n'} 
          &nbsp; &nbsp;f(x)= &nbsp;<Text style={{textDecorationLine:'underline'}}> 
          (x+1)&#179;</Text> {'\n'}
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  (2x+2)&#8308;
          {'\n'}
          &nbsp; &nbsp;f(x)=&nbsp; <Text style={{textDecorationLine:'underline'}}> 
          (2x+2)&#8308; d/dx (x+1)&#179; - (x+1)&#179;d/dx (2x+2)&#8308;</Text> {'\n'}
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          (2x+2)&#8308; {'\n'}
          &nbsp; &nbsp; &nbsp; &nbsp; = &nbsp;  
          <Text style={{textDecorationLine:'underline'}}> (2x+2)&#8308; 3(x+1)&#178;
          d/dx (x+1) - (x+1)&#179; 4 (2x+2)&#179; d/dx (2x+2) </Text> {'\n'}
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; (2x+2)&#178;
          {'\n'}
          &nbsp; &nbsp; &nbsp; &nbsp; = &nbsp;  
          <Text style={{textDecorationLine:'underline'}}>(2x+2)&#8308; 3(x+1)&#178; (1)
          - (x+1)&#179; 4(2x+2)&#179; (2)</Text> {'\n'}
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; (2x+2)&#178;{'\n'}
          &nbsp; &nbsp; &nbsp; &nbsp; = &nbsp;
          <Text style={{textDecorationLine:'underline'}}>
          3(2x+2)&#8308;(x+1)&#179;- 8(x+1)&#179;(2x+2)&#179;</Text> {'\n'}
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  (2x+2)&#178;{'\n'} 
  
          </Text>
        </View>
      </ScrollView>
    );
  }
}

class DerivativesOfTrigonometricFunctionsScreen extends React.Component {
  render() {
    return (
      
      <ScrollView style={{ marginTop: 3 }}>

        <View style={{ marginHorizontal: 12 }}>
          <Text>
            Derivatives of Trigonometric Functions{"\n"}{"\n"}
            sin u = cos u du{"\n"}
            cos u = -sin u du{"\n"}
            sec u = sec u tan u du{"\n"}
            tan u = sec&#178; u du{"\n"}
            csc u = -cs u cot u du{"\n"}
            cot u = -csc&#178; u du{"\n"}
          </Text>
          <Text>
            {"\n"}
            1.) y = sin 2x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = cos 2x(2){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2 cos
            2x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590;&#7590; = -2 cos 2x(2)
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = -4 cos 2x
            {"\n"}
          </Text>
          <Text>
            {"\n"}
            2.) y = tan 5x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = sec&#178; 5x(5){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 5
            sec&#178; 5x{"\n"}
          </Text>
          <Text>
            {"\n"}
            3.) y = cos 3x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = -3 sin 3x{"\n"}
          </Text>
          <Text>
            {"\n"}
            4.) y = sec 11x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = 11 sec 11x tan 11x
            {"\n"}
          </Text>
          <Text>
            {"\n"}
            5.) y = x&#179; sin x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#7590; = x&#179; (cos x) + sin
            x(3x&#178;){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            x&#179; cos x + 3x&#178; sin x{"\n"}
          </Text>
          <Text>
            {"\n"}
            6.) f(x) = 3sin x - 5csc x + 3tan x + x&#178;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            3(cos x) - 5(-csc x cot x) + 3(sec&#178; x) + 2x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
            3cos x + 5 csc x cot x + 3sec&#178; x + 2x{"\n"}
          </Text>

          <Text>
            {"\n"}
            7.) f(x) = sin 11x&#178; cot 2x{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = sin 11x&#178; (-2csc&#178; 2x) + cot 2x (22x cos 11x&#178;){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = -2sin 11x&#178; csc&#178; 2x + 22x cot 2x cos 11x&#178;{"\n"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>
              {"\n"}
              8.) f(x) =&nbsp;
            </Text>
            <View>
              <Text style={{ textDecorationLine: "underline" }}>
                {"\n"}
                cos 8x
              </Text>
              <Text>&nbsp;sec x&#179;</Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: -10 }}>=&nbsp;</Text>
                <Text style={{ textDecorationLine: "underline" }}>
                  sec x&#179; (-8 sin 8x) - cos 8x(3x&#178; sec x&#179; tan
                  x&#179;)
                </Text>
              </View>
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sec&#178; x&#179; &#8594; (sec
                x&#179;)&#178;
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: -10 }}>=&nbsp;</Text>
                <Text style={{ textDecorationLine: "underline" }}>
                  -8sec x&#179; sin 8x - 3x&#178; cos 8x sec x&#179; tan x&#179;
                </Text>
              </View>
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sec&#178; x&#179;
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: -10 }}>=&nbsp;</Text>
                <Text style={{ textDecorationLine: "underline" }}>
                  -8sin 8x -3x&#178; cos 8x tan x&#179;
                </Text>
              </View>
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; sec&#178; x&#179;
              </Text>
            </View>
          </View>

          <Text>
            {"\n"}
            9.) f(x) = sec&#179; x => (sec x)&#179;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;= 3(sec x)&#178; (sec x tan x) / 3sec&#178; x sec tan x{"\n"}
          </Text>

          <Text>
            {"\n"}
            10.) y = x&#8311; (sec&#185;&#8304; 8x&#178;) => x&#8311; (sec
            8x&#178;)&#185;&#8304;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;= x&#8311; d|dx (sec 8x&#178;)&#185;&#8304; + (sec 8x&#178;
            tan 8x&#178;) + (16x) + (sec 8x&#178;)&#185;&#8304; (7x&#8310;)
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;= 160x&#8312; (sec 8x&#178;)&#8313; (sex 8x&#178; tan
            8x&#178;) - 7x&#8310; (sec 8x&#178;)&#185;&#8304;{"\n"}{"\n"}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text>11.) g(x) =&nbsp;</Text>
            <View>
              <Text style={{ textDecorationLine: "underline" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Text>cot (x+1)</Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginStart: -10 }}>=&nbsp;</Text>
                <View>
                  <Text style={{ textDecorationLine: "underline" }}>
                    cot (x+1) (6x) - 3x[-csc&#178; (x+1)]
                  </Text>
                  <Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cot&#178; (x+1)
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginStart: -10 }}>=&nbsp;</Text>
                <View>
                  <Text style={{ textDecorationLine: "underline" }}>
                    6x cot (x+1) - 3x&#178; csc&#178; (x+1)
                  </Text>
                  <Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cot&#178; (x+1)
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text>
            {"\n"}
    12.) h(x) = sin (2x + 1) cos (2x + 1){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;= sin (2x + 1) (-2sin (2x +1)) + cos (2x + 1) (2cos (2x +1)){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;= -2sin (2x + 1) sin (2x + 1) + 2cos (2x + 1) cos (2x +1){"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;= -2 sin&#178; (2x + 1) + 2cos&#178; (2x + 1){"\n"}{"\n"}
          </Text>

          <View style={{flexDirection:'row'}}>
            <View>
            <Text>13.) f(x) =&nbsp;</Text>
            </View>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                x&#179; sec 2x
              </Text>
              <Text>
              &nbsp;&nbsp;&nbsp;cot&#8308;x
              </Text>

              <View style={{flexDirection:'row'}}>
                <Text style={{marginStart:-10}}>=&nbsp;</Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>cot 4x (x&#179; d|dx sec 2x + sec 2x d|dx x&#179;) - (x&#179; sec 2x) d|dx cot 4x)</Text>
                  <Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;
                    (cot 4x)&#178;
                  </Text>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={{marginStart:-10}}>=&nbsp;</Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>
                    cot 4x [(x&#8311;)(2sex 2x tan 2x) + (sec 2x)(3x&#178;)]
                    - (x&#179; sec 2x)(4)(cot&#179;x)(-csc&#178;x)(1)</Text>
                  <Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                    cot&#8312;x
                  </Text>
                </View>
              </View>


              <View style={{flexDirection:'row'}}>
                <Text style={{marginStart:-10}}>=&nbsp;</Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>
                    2x&#179; cot&#8308; x sec 2x tan 2x + 3x cot&#8308;x sec 2x
                    + 3x cot&#8308; x sec 2x + 4x&#179; sec 2x cot&#179;x csc&#178;x
                  </Text>
                  <Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                    cot&#8312;x
                  </Text>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={{marginStart:-10}}>=&nbsp;</Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>
                    2x&#179; cot x sec 2x tan 2x + 3x&#178; cot x sec 2x + 4x&#179; sec 2x csc&#178;x
                  </Text>
                  <Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    cot&#8312;x
                  </Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

class DerivativesOfExponentialAndLogarithmicFunctionsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
        <Text>
            Derivatives of Exponenential and Logarithmic Functions{'\n\n'}
          </Text>
          <View style={{flexDirection:'row'}}>
            <View>
              <View>
                <Text>
                1.) e&#x1D58; => e&#x1D58; du{'\n'}
                2.) a&#x1D58; => ln a • a&#x1D58; • du{'\n'}
                </Text>
                <View style={{flexDirection:'row'}}>
                  <Text>3.) ln u => </Text>
                  <View>
                    <Text style={{textDecorationLine:'underline'}}>1</Text>
                    <Text>u</Text>
                  </View>
                  <Text style={{marginTop:7}}>&nbsp;•&nbsp;du &nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  <View>
                    <Text style={{textDecorationLine:'underline'}}>du</Text>
                    <Text>&nbsp;u</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>
                  4.) log 
                  <Text style={{fontSize:10}}>b</Text>
                  &nbsp;u =>&nbsp;
                </Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  <Text>ln b • u</Text>
                </View>
                <Text style={{marginTop:7}}>&nbsp;•&nbsp;du&nbsp;&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                <View>
                  <Text style={{textDecorationLine:'underline'}}>
                  &nbsp;&nbsp;&nbsp;&nbsp;du&nbsp;&nbsp;&nbsp;&nbsp;
                  </Text>
                  <Text>ln b • u</Text>
                </View>
              </View>
            </View>

          </View>

    <Text>{'\n'}</Text>

          <View>
              <Text>
                e = Euler number{'\n'}
                ln = natural logarithmic{'\n'}
                loge = logarithmic{'\n'}
                b = base{'\n'}
                a = constant/any positive real number{'\n'}
                v = exponenential or log function
              </Text>
            </View>

            <Text>{'\n'}</Text>

        <Text>
            1.) y = e&#8308;x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= e&#8308; x d|dx 4x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4 e&#8308;{'\n'}{'\n'}
          </Text>

          <Text>
            2.) y = 7&#x02E3;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ln 7 • 7&#x02E3;&#8315;&#185;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ln 7 • 7&#x02E3;{'\n'}{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
            <Text>3.) y&nbsp;</Text>
            <View>
              <Text>= ln (x+1)</Text>
              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                  d|dx (x+1)
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x+1
              </Text>

              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;1&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;x+1
              </Text>

            </View>
          </View>

<Text>{'\n'}</Text>


<View style={{flexDirection:'row'}}>
            <Text>4.) y&nbsp;</Text>
            <View>
              <Text>= log 
                <Text style={{fontSize:10,textDecorationLine:'underline'}}>
                  10
                </Text>&nbsp;5x
              </Text>
              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;d|dx 5x&nbsp;&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;ln • 10 • 5x
              </Text>

              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;ln • 10 • 5x
              </Text>

            </View>
          </View>

          <Text>{'\n'}</Text>

          <Text>
            5.) y = 3e&#x02E3; + 5ln x{'\n'}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3(d|dx e&#x02E3;) + 5(d|dx ln x){'\n'}
      </Text>

      <View style={{flexDirection:'row'}}>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3e&#x02E3; + 5 (</Text>
      <View>
        <Text style={{textDecorationLine:'underline',fontSize:8}}>
          1
        </Text>
        <Text style={{fontSize:8}}>x</Text>
      </View>
      <Text>
        ){'\n'}
          </Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3e&#x02E3; +&nbsp;
        </Text>
        <View>
            <Text style={{textDecorationLine:'underline'}}>5</Text>
            <Text>x</Text>
          </View>
      </View>

      <Text>{'\n'}</Text>

        <Text>
            6.) f(x) = x&#178; e&#x02E3;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    = x&#178; (d|dx e&#x02E3;) + e&#x02E3; (d|dx x&#178;){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = x&#178; e&#x02E3; + 2x e&#x02E3;{'\n'}{'\n'}
      </Text>

      <Text>
            7.) y = 7&#x02E3; cos 5x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 7x d|dx
            cos 5x + cos 5x d|dx 7x{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 7&#x02E3;
    (-5 sin 5x) + cos 5x (ln 7 • 7&#x02E3;){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -5 • 7&#x02E3;
            sin 5x + ln 7 • 7&#x02E3; -cos 5x{'\n'}{'\n'}
      </Text>

      <Text>
            8.) f(x) = e&#179;&#x02E3;<Text style={{fontSize:15}}>&#178;</Text>{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = e&#179;&#x02E3;<Text style={{fontSize:15}}>&#178;</Text> d|dx 3x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    = e&#179;&#x02E3;<Text style={{fontSize:15}}>&#178;</Text> (6x){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 6x e&#179;&#x02E3;<Text style={{fontSize:15}}>&#178;</Text>{'\n'}{'\n'}
      </Text>


        <Text>
            9.) y = 11&#x02E2;&#x2071;&#x207F; &#179;&#x02E3;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ln 11 •
            11&#x02E2;&#x2071;&#x207F; &#179;&#x02E3;
            d|dx  sin 3x
            {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ln 11 •
            11&#x02E2;&#x2071;&#x207F; &#179;&#x02E3;
            3 cos 3x
            {'\n'}{'\n'}
      </Text>


      <View style={{flexDirection:'row'}}>
            <Text>10.) y&nbsp;</Text>
            <View>
              <Text>= ln sin 2x
              </Text>
              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                d|dx sin 2x
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sin 2x
              </Text>

              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;&nbsp;2 cos 2x&nbsp;&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sin 2x
              </Text>

            </View>
          </View>

          <Text>{'\n'}</Text>

        <View style={{flexDirection:'row'}}>
            <Text>11.) f(x)&nbsp;</Text>
            <View>
              <Text>= log (x&#178;+3x)
              </Text>
              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;d|dx (x&#178;+3x)&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ln • 10 • (x&#178;+3x)
              </Text>

              <View style={{flexDirection:'row'}}>
                <Text>=&nbsp;</Text>
                <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2x + 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
              </View>
              <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ln 10 • (x&#178;+3x)
              </Text>

            </View>
          </View>

          <Text>{'\n'}</Text>

        <Text>
            12.) y = e&#179;&#x02E3; tan x&#178;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= e&#179;&#x02E3;
    (2 sec&#178; x&#178; + 3e&#179; tan x&#178; (3e&#179;&#x02E3;){'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2x&#179;&#x02E3;
            sec&#178; x&#178; + 3e&#179; tan x&#178;{'\n'}{'\n'}
          </Text>

          <Text>
            13.) y = 3&#x1D9C;&#x1D52;&#x1D57; &#x02E3; • e&#8308;&#x02E3;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3&#x1D9C;&#x1D52;&#x1D57; &#x02E3;
            (4x&#8308;&#x02E3;) + e&#8308;&#x02E3; (ln 3 • 3&#x1D9C;&#x1D52;&#x1D57; &#x02E3; • - csc&#178; x)
            {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4 • 3&#x1D9C;&#x1D52;&#x1D57; &#x02E3;
            e&#8308;&#x02E3; - e&#8308;&#x02E3; • ln 3 • 3&#x1D9C;&#x1D52;&#x1D57; &#x02E3; • csc&#178; x
            {'\n'}{'\n'}
          </Text>

        </View>
      </ScrollView>
    );
  }
}

class ImplicitDifferentiationScreen extends React.Component {
  render() {
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
          
        <Text>
        <Text style={stylesVar.bold}>Implicit Differentiation</Text>{"\n"}{"\n"}
    In&nbsp;implicit&nbsp;differentiation,&nbsp;we&nbsp;differentiate&nbsp;each&nbsp;{"\n"}side&nbsp;of&nbsp;an&nbsp;equation&nbsp;with&nbsp;two&nbsp;variables&nbsp;(usually&nbsp;x{"\n"}
    &nbsp;and&nbsp;y)&nbsp;by&nbsp;treating&nbsp;one&nbsp;of&nbsp;the&nbsp;variables&nbsp;as&nbsp;a&nbsp;{"\n"}
    function&nbsp;of&nbsp;the&nbsp;other.{"\n"}{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>y&nbsp;=&nbsp;4x&#178;</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x)&nbsp;=&nbsp;y&nbsp;=&nbsp;y&#178;{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#39;&nbsp;=&nbsp;8x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&#178;(x)&nbsp;=&nbsp;y&#39;&nbsp;=&nbsp;2yy&#39;&nbsp;=&nbsp;2y&nbsp;dy/dx{"\n"}
    {"\n"}{"\n"}
    <Text style={stylesVar.bold}>Example:</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;x&#178;&nbsp;+&nbsp;y&#178;&nbsp;=&nbsp;9{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d/dx&nbsp;x&#178;&nbsp;+&nbsp;d/dx&nbsp;y&#178;&nbsp;=&nbsp;d/dx&nbsp;9{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2x&nbsp;+&nbsp;2yy&#39;&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;2yy&#39;&nbsp;</Text>=&nbsp;<Text style={stylesVar.underline}>-2x&nbsp;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2y{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>y&#39;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>-2x&nbsp;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2y{"\n"}{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;x&#178;y&#179;&nbsp;+&nbsp;3x&#8311;&nbsp;-&nbsp;y&#8310;&nbsp;=&nbsp;6{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;(3y&#178;y&#39;)&nbsp;+y&#179;(2x)&nbsp;+&nbsp;21x&#8310;&nbsp;-&nbsp;6y&#8309;y&#039;&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;3y&#178;y&#39;&nbsp;+&nbsp;2xy&#179;&nbsp;+&nbsp;21x&#8310;&nbsp;-&nbsp;6y&#8309;y&#039;&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;3y&#178;y&#39;&nbsp;-&nbsp;6y&#8309;y&#039;&nbsp;=&nbsp;-&nbsp;2xy&#179;&nbsp;-&nbsp;21x&#8310;{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;y&#39;(x&#178;3y&#178;&nbsp;-&nbsp;6y&#8309;)&nbsp;</Text>=<Text style={stylesVar.underline}>&nbsp;-&nbsp;2xy&#179;&nbsp;-&nbsp;21x&#8310;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;3y&#178;&nbsp;-&nbsp;6y&#8309;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#178;3y&#178;&nbsp;-&nbsp;6y&#8309;&nbsp;{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>y&#039;</Text>&nbsp;&nbsp;&nbsp;=&nbsp;<Text style={stylesVar.underline}>-&nbsp;2xy&#179;&nbsp;-&nbsp;21x&#8310;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;y&#178;&nbsp;-&nbsp;6y&#8309;{"\n"}
    {"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;x&#179;&nbsp;+&nbsp;3x&#178;y&nbsp;+&nbsp;7xy&#8310;&nbsp;=&nbsp;5{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;&nbsp;+&nbsp;3x&#178;y&#039;&nbsp;+&nbsp;6xy&nbsp;+&nbsp;7x(6y&#8309;y&#039;)&nbsp;+&nbsp;y&#8310;(7)&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;y&#039;&nbsp;+&nbsp;42xy&#8309;y&#039;&nbsp;=&nbsp;-&nbsp;3x&#178;&nbsp;-&nbsp;6xy&nbsp;-&nbsp;7y&#8310;{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&#039;<Text style={stylesVar.underline}>(3x&#178;&nbsp;+&nbsp;42xy&#8309;)&nbsp;</Text>=<Text style={stylesVar.underline}>&nbsp;-&nbsp;3x&#178;&nbsp;-&nbsp;6xy&nbsp;-&nbsp;7y&#8310;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;&nbsp;+&nbsp;42xy&#8309;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;&nbsp;+&nbsp;42xy&#8309;{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>y&#039;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&nbsp;-&nbsp;3x&#178;&nbsp;-&nbsp;6xy&nbsp;-&nbsp;7y&#8310;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x&#178;&nbsp;+&nbsp;42xy&#8309;{"\n"}  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;cos3x&nbsp;+&nbsp;x&#178;sin5y&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-3sin3x&nbsp;+&nbsp;x&#178;(5cos5yy&#039;)&nbsp;+&nbsp;sin5y(2x)&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-3sin3x&nbsp;+&nbsp;5x&#178;cos5yy&#039;&nbsp;+&nbsp;2xsin5y&nbsp;=&nbsp;0{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;5x&#178;cos5yy&#039;&nbsp;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&nbsp;3sin3x&nbsp;-&nbsp;2xsin5y&nbsp;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5x&#178;cos5y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5x&#178;cos5y{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>y&#039;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&nbsp;3sin3x&nbsp;-&nbsp;2xsin5y&nbsp;</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5x&#178;cos5y{"\n"}
    {"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;e&#179;&#x02E3;siny&nbsp;+&nbsp;x&#178;&nbsp;=&nbsp;4x&#179;y&#178;{"\n"}
    &nbsp;&nbsp;e&#179;&#x02E3;(cosyy&#039;)&nbsp;+&nbsp;siny(3e&#179;&#x02E3;)&nbsp;+&nbsp;2x&nbsp;=&nbsp;4x&#179;2yy&#039;&nbsp;+&nbsp;y&#178;(12x&#178;){"\n"}
    &nbsp;&nbsp;(e&#179;&#x02E3;cosyy&#039;&nbsp;-&nbsp;8x&#179;yy&#039;)&nbsp;=&nbsp;-3e&#179;&#x02E3;siny&nbsp;+&nbsp;12x&#178;y&#178;&nbsp;-&nbsp;2x{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>y&#039;(e&#179;&#x02E3;cosy&nbsp;-&nbsp;8x&#179;y)</Text>&nbsp;=<Text style={stylesVar.underline}>&nbsp;12x&#178;y&#178;&nbsp;-3e&#179;&#x02E3;siny&nbsp;-&nbsp;2x</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&#179;&#x02E3;cosy&nbsp;-&nbsp;8x&#179;y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&#179;&#x02E3;cosy&nbsp;-&nbsp;8x&#179;y{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>y&#039;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&nbsp;12x&#178;y&#178;&nbsp;-3e&#179;&#x02E3;siny&nbsp;-&nbsp;2x</Text>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&#179;&#x02E3;cosy&nbsp;-&nbsp;8x&#179;y
          </Text>

        </View>
      </ScrollView>
    );
  }
}

class LHopitalsRuleScreen extends React.Component {
  render() {
    const Link = props => (
      <Text
        {...props}
        accessibilityRole="link"
        style={StyleSheet.compose(
          stylesVar.link,
          props.style
        )}
      />
    );
    return (
      <ScrollView style={{ marginTop: 3 }}>
       <View style={{ marginHorizontal: 12 }}>
        <Text>
        <Text style={stylesVar.bold}>L&#039;H&#244;pital&#039;s&nbsp;or&nbsp;L&#039;Hospital&#039;s Rule</Text>{"\n"}{"\n"}
        This&nbsp;provides&nbsp;a&nbsp;technique&nbsp;to&nbsp;evaluate&nbsp;limits&nbsp;of&nbsp;{"\n"}
        indeterminate&nbsp;forms.&nbsp;Application&nbsp;(or&nbsp;repeated&nbsp;{"\n"}
        application)&nbsp;of&nbsp;the&nbsp;rule&nbsp;often&nbsp;converts&nbsp;an&nbsp;{"\n"}
        indeterminate&nbsp;form&nbsp;to&nbsp;an&nbsp;expression&nbsp;that&nbsp;can&nbsp;be&nbsp;{"\n"}
        easily&nbsp;evaluated&nbsp;by&nbsp;substitution.&nbsp;Usually&nbsp;done&nbsp;by&nbsp;{"\n"}
        getting&nbsp;the&nbsp;derivative.{"\n"}
        {"\n"}
        <Text style={stylesVar.bold}>Indeterminate&nbsp;Forms</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;0&nbsp;</Text>&nbsp;,&nbsp;0&nbsp;&#8226;&nbsp;&#8734;&nbsp;,&nbsp;<Text style={stylesVar.underline}>&#177;&#8734;</Text>&nbsp;,&nbsp;&#8734;-&#8734;&nbsp;,&nbsp;0&#8304;&nbsp;,&nbsp;(&#177;&#8734;)&#8304;&nbsp;,&nbsp;1&#94;&#177;&#8734;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#177;&#8734;{"\n"}
        {"\n"}
        <Text style={stylesVar.bold}>Example:</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;1.&nbsp;lim&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&#124;x&#124;&nbsp;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&#8734;</Text>&nbsp;,&nbsp;<Text style={stylesVar.bold}>Indeterminate</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;x&#8594;+&#8734;&nbsp;&nbsp;&nbsp;3&#x02E3;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8734;{"\n"}
        &nbsp;&nbsp;&nbsp;Using&nbsp;L&#039;H&#244;pital&#039;s&nbsp;&nbsp;Rule:{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lim&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&#124;x&#124;&nbsp;</Text>&nbsp;=&nbsp;lim&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>&nbsp;0&nbsp;</Text>&nbsp;=&nbsp;<Text style={stylesVar.bold}>0</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;x&#8594;+&#8734;&nbsp;&nbsp;&nbsp;3&#x02E3;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;+&#8734;&nbsp;3ln&#8226;3&#x02E3;&nbsp;&nbsp;&nbsp;&nbsp;&#8734;{"\n"}
        {"\n"}
        &nbsp;&nbsp;&nbsp;2.&nbsp;lim&nbsp;&nbsp;&#8968;&nbsp;x&nbsp;+&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&#8969;</Text>&nbsp;=&nbsp;2&nbsp;+&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;</Text><Text style={stylesVar.bold}>Indeterminate</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;x&#8594;2&nbsp;&nbsp;&nbsp;&#8970;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(x-2)	&#8308;&#8971;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&#8308;{"\n"}
        &nbsp;&nbsp;&nbsp;Using&nbsp;L&#039;H&#244;pital&#039;s&nbsp;&nbsp;Rule:{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lim&nbsp;&nbsp;&#8968;&nbsp;x&nbsp;+&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&#8969;</Text>&nbsp;=&nbsp;1&nbsp;+&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</Text>&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;1&nbsp;+&nbsp;<Text style={stylesVar.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;x&#8594;2&nbsp;&nbsp;&nbsp;&#8970;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(x-2)	&#8308;&#8971;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4(2-2)&#179;(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4)(0)(3){"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;1&nbsp;+&nbsp;<Text style={stylesVar.underline}>0</Text>&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>Indeterminate,&nbsp;function&nbsp;</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={stylesVar.bold}>is&nbsp;indeterminate.</Text>{"\n"}
        {"\n"}
        &nbsp;&nbsp;&nbsp;3.&nbsp;lim&nbsp;&nbsp;&nbsp;<Text style={stylesVar.underline}>&nbsp;x&#178;&nbsp;-&nbsp;1&nbsp;</Text>&nbsp;=&nbsp;<Text style={stylesVar.underline}>2x</Text>&nbsp;=&nbsp;2x&nbsp;=&nbsp;2(1)&nbsp;=&nbsp;<Text style={stylesVar.bold}>2</Text>{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&#8594;1&nbsp;&nbsp;&nbsp;x&nbsp;-&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1{"\n"}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

class PartialDifferentiationScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
      <View style={{ marginHorizontal: 12 }}>
        <Text>
          Partial Differentiation
        </Text>

        <View style={{flexDirection:'row'}}>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8630;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text style={{textDecorationLine:'underline'}}>
          &#8706;F &nbsp;&nbsp;&nbsp;&nbsp;&#8706;&#178;F &nbsp;&nbsp;&nbsp;&nbsp;&#8706;&#178;F
          </Text>
        </View>

        <Text>
          Partial &nbsp;&#8706;x &nbsp;&nbsp;&nbsp; &#8706;x&#178; &nbsp;&nbsp; &#8706;x&#178;&#8706;y
        </Text>
        <Text>
          
          {'\n'}
          1.) f(x,y) = x&#179; + 3y&#178; - 4x&#178;y&#8311;
          {'\n'}{'\n'}
          </Text>


          <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
              = 3x&#178; + 0 - 8x&#8311;
              &nbsp;
              = 3x&#178; - 8x&#8311;

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y {'\n'} </Text>
          </View>

          <View>
              <Text>
                = 0 + 6y - 4x&#178;7y&#8310;
                &nbsp;
                = 6y - 28x&#178;y&#8310;


              </Text>
            </View></View>






            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#178;{'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 6x - 8y&#8311;</Text>
            </View></View>

            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#178; {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>
                = 6 - 28x&#178;(6y&#8309;)
                &nbsp;
                = 6 - 168x&#178;y&#8309;

              </Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#8706;y {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>
                = 0 - 56xy&#8310;
                &nbsp;
                = 0 - 56xy&#8310;
              </Text>
            </View></View>





            
            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#8706;x {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>
                = 0 - 56xy&#8310;
                &nbsp;
                = 0 - 56xy&#8310;
                </Text>
            </View></View>




















        <Text>
          
          {'\n'}
          2.) f(x,y) = x&#178;y-2y
          {'\n'}{'\n'}
          </Text>


        <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
                = 2xy

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y {'\n'} </Text>
          </View>

          <View>
              <Text>= x&#178;-2</Text>
            </View></View>






            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#178;{'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 0</Text>
            </View></View>

            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#178; {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 2y</Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#8706;y {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 2x</Text>
            </View></View>





            
            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#8706;x {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 2x</Text>
            </View></View>









            <Text>
          
          {'\n'}
          3.) f(x,y,z) = x&#178;+ y&#179;- z&#8308;- x&#8308; y&#179; z
          {'\n'}{'\n'}
          </Text>

          <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
                = 2x - 4x&#179; y&#179; z&#8308;

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y {'\n'} </Text>
          </View>

          <View>
              <Text>= 3y&#178;- 3x&#8308; y&#178; z&#178; </Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;z {'\n'} </Text>
          </View>

          <View>
              <Text>= 4z&#179;- 2x&#8308; y&#179; z</Text>
            </View></View>






            <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x&#178; {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
                = 2 - 12x&#178;y&#179; z&#178;

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#178; {'\n'} </Text>
          </View>

          <View>
              <Text>= 6 - 6x&#8308; z&#178; </Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;z&#178; {'\n'} </Text>
          </View>

          <View>
              <Text>= 12z&#178;- 2x&#8308; y&#179;</Text>
            </View></View>
            


            <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x&#179; {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
                = -24 x y&#179; z&#178;

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#179; {'\n'} </Text>
          </View>

          <View>
              <Text>= 6 - 6x&#8308; z&#178; </Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;z&#179; {'\n'} </Text>
          </View>

          <View>
              <Text>= 24x</Text>
            </View></View>

          <Text>
          
          {'\n'}
          4.) f(x,y) = x&#179; e&#179;&#x02B8;	 + x&#178; sin y - y&#178; + y tan 3x
          {'\n'}{'\n'}
          </Text>


          <View style={{flexDirection:'row'}}>
          <View>
              
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
            <Text> &nbsp;&#8706;x {'\n'} {'\n'}</Text>
          </View>

          <View>
              <Text>
                = 3x&#179; e&#179;&#x02B8; + 2x sin y + 3y sec&#178; 3x

              </Text>
            </View></View>
            
           
           
           
           
           
           <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y {'\n'} </Text>
          </View>

          <View>
              <Text>= 3x&#179; e&#179;&#x02B8; + x&#178; cos y - 2y + tan 3x</Text>
            </View></View>






            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#178;{'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 6x e&#179;&#x02B8; + 2 sin y + 18 y sec&#178; 3x tan 3x </Text>
            </View></View>

            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#178; {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 9x&#179; e&#179;&#x02B8; - x&#178; sin y - 2</Text>
            </View></View>




            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;x&#8706;y {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 9x&#178; e&#179;&#x02B8; + 2x cos y + 3 sec&#178; 3x</Text>
            </View></View>





            
            <View style={{flexDirection:'row'}}>
          <View>  
          <Text style={{textDecorationLine:'underline'}}>  &#8706;&#178;F&nbsp;&nbsp;</Text>
        
            <Text> &nbsp;&#8706;y&#8706;x {'\n'}{'\n'}</Text>
          </View>

          <View>
              <Text>= 9x&#178; e&#179;&#x02B8; + 2x cos y + 3 sec&#178; 3x</Text>
            </View></View>





      </View>
    </ScrollView>
    );
  }
}

class IntegralCalculusScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
      <View style={{ marginHorizontal: 12 }}>
        <Text>
          Integral Calculus{'\n'}{'\n'}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text>
            Given{'\n'}
            Functions{'\n'}
            Derivatives
          </Text>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text>
            Process{'\n'}
            Differentiation{'\n'}
            Integration /{'\n'} &nbsp;Antiderivatives
          </Text>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text>
            Result{'\n'}
            Derivatives{'\n'}
            Function
          </Text>
        </View>
        <Text>
          &#8747; f(x) dx = Fx + c{'\n'}
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&#9660;
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9660;
          &nbsp;&nbsp;&nbsp;Constant Of Integration
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9660;
          &nbsp;&nbsp;&nbsp;&nbsp;Particular Integral
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;&#9660;&nbsp;&nbsp;&nbsp;&nbsp;Integrand
        </Text>
        <Text>{'\n'}
          Integral Sign{'\n'}{'\n'}
        </Text>

        <View style={{flexDirection:"row"}}>
          <Text>
            1.) f(x) = x&#179;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(x) = 3x&#178;
          </Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>
            f&#185;(x) = x&#179; + 2{'\n'}
            f(x) = 3x&#178;
          </Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>
            f&#185;(x) = x&#179; - 15{'\n'}
            f(x) = 3x&#178;
          </Text>
        </View>


        <View>
          <Text>{'\n'}
            Rules of Integration{'\n'}{'\n'}
          </Text>
          <View style={{flexDirection:"row"}}>
            <Text>
            1.) &#8747; x&#8319; dx = </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>
                &nbsp;&nbsp;x&#8319;&nbsp;&nbsp;
              </Text>
              <Text>
                n+1
              </Text>
            </View>
            <Text style={{marginTop:6}}>
              &nbsp;+ c; n&#8800;1
            </Text>
          </View>
          <View>
          </View>
        </View>

        <Text>{'\n'}
          2.) &#8747; k f(x) dx = l &#8747; f(x) dx + c
        </Text>

        <Text>{'\n'}
          3.) &#8747; [f(x) &#177; g(x) &#177;..] dx = &#8747; f(x) dx &#177; &#8747;  g(x) dx &#8747;{'\n'}{'\n'}
        </Text>

        <Text>
          a.) &#8747; x&#8308; dx
        </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6,marginStart:18}}>= </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              x&#8308;&#8315;&#185;
            </Text>
            <Text>
              4+1
            </Text>
          </View>
          <Text style={{marginTop:6}}> + c</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6,marginStart:18}}>= </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              x&#8309;
            </Text>
            <Text>
              5
            </Text>
          </View>
          <Text style={{marginTop:6}}> + c</Text>
        </View>

        <Text>{'\n'}
          b.) &#8747; 5dx{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 5x+c
        </Text>
        
        <Text>{'\n'}
          c.) &#8747; 7x&#8308; dx
        </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6,marginStart:18}}>= </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              7x&#8308;&#8314;&#185;
            </Text>
            <Text>
              &nbsp;4+1
            </Text>
          </View>
          <Text style={{marginTop:6}}> + c</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6,marginStart:18}}>= </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              7x&#8309;
            </Text>
            <Text>
              &nbsp;&nbsp;5
            </Text>
          </View>
          <Text style={{marginTop:6}}> + c</Text>
        </View>

        <Text>{'\n'}
          d.) &#8747; dx{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= x+c
        </Text>

        <Text>{'\n'}
        e.) &#8747; (3x-5) dx{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3x dx - &#8747; 5dx {'\n'}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
        </Text>
        <Text style={{marginTop:6}}>&nbsp;&#8747;&nbsp;</Text>
        <View>
          <Text>3x&#185;&#8314;&#185;</Text>
          <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>&nbsp;&nbsp;&nbsp;1+1</Text>
        </View>
        <Text style={{marginTop:6}}>
          &nbsp;- 5x + c
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
        </Text>
        <Text style={{marginTop:6}}>&nbsp;&#8747;&nbsp;</Text>
        <View>
          <Text>3x&#178;</Text>
          <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>&nbsp;&nbsp;2</Text>
        </View>
        <Text style={{marginTop:6}}>
          &nbsp;- 5x + c
        </Text>
      </View>

      <Text>{'\n'}
        f.) &#8747; (4x&#179; -2x&#178; - 3x&#179;) dx{'\n'}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;
        </Text>

        <View>
          <Text style={{textDecorationLine:'underline'}}>
            4x&#8308;
          </Text>
          <Text>
          &nbsp;&nbsp;4
          </Text>
        </View>

        <Text style={{marginTop:6}}>&nbsp;-&nbsp;</Text>

        <View>
          <Text style={{textDecorationLine:'underline'}}>
            2x&#179;
          </Text>
          <Text>
          &nbsp;&nbsp;3
          </Text>
        </View>

        <Text style={{marginTop:6}}>&nbsp;-&nbsp;</Text>

        <View>
          <Text style={{textDecorationLine:'underline'}}>
            3x&#8308;
          </Text>
          <Text>
          &nbsp;&nbsp;4
          </Text>
        </View>
        
        <Text style={{marginTop:6}}>&nbsp;+ c</Text>
        
      </View>
      <Text>{'\n'}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>
        g.)&nbsp;
        </Text>
        <Text style={{marginTop:6}}>&nbsp;&#8747;&nbsp;</Text>
        <View>
          <Text style={{textDecorationLine:'underline'}}>
            &nbsp;&nbsp;2&nbsp;&nbsp;
          </Text>
          <Text>
            x&#185;&#8304;
          </Text>
        </View>
      </View>

      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2x&#8315;&#185;&#8304; dx</Text>

      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= &#8747;&nbsp;</Text>
        <View>
          <Text style={{textDecorationLine:'underline'}}>
            2x&#8315;&#185;&#8304;&#8314;&#185;
          </Text>
          <Text>
          &nbsp;-10+1
          </Text>
        </View>
        <Text style={{marginTop:6}}>
            &nbsp;+ c
          </Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
        <View>
          <Text style={{textDecorationLine:'underline'}}>
            2x&#8315;&#8313;
          </Text>
          <Text>
          &nbsp;&nbsp;&nbsp;9
          </Text>
        </View>
        <Text style={{marginTop:6}}>
            &nbsp;+ c
          </Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:6}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;-</Text>
        <View>
          <Text style={{textDecorationLine:'underline'}}>
          &nbsp;&nbsp;2
          </Text>
          <Text>
          9x&#8313;
          </Text>
        </View>
        <Text style={{marginTop:6}}>
            &nbsp;+ c
          </Text>
      </View>


      <Text>{'\n'}
        h.) &#8747;	&#8308;&#8730;x dx{'\n'}
      </Text>  

      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:5}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= &#8747;</Text>
        <Text>&nbsp;x</Text>
        <View>
          <Text style={{textDecorationLine:'underline', fontSize:5}}>1</Text>
          <Text style={{fontSize:5}}>4</Text>
        </View>
        <Text>
          &#8314;&#185;
        </Text>
      </View>


      <View style={{flexDirection:'row'}}>
        <View>
          

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Text style={{textDecorationLine:'underline', marginTop:-20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      </View>
      
      <View style={{flexDirection:'row', marginTop:-20}}>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <View>
          <Text style={{textDecorationLine:'underline', fontSize:8}}>1</Text>
          <Text style={{fontSize:8}}>4</Text>
        </View>
        <Text>&nbsp;+&nbsp;1</Text>

      </View>

        </View>
        <Text style={{marginTop:-15}}>&nbsp;+ c</Text>
      </View>

      <View style={{flexDirection:'row'}}>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
      <View>
        
      <View style={{flexDirection:'row'}}>
        <Text>x</Text>
        <View>
          <Text style={{textDecorationLine:'underline', fontSize:5}}>5</Text>
          <Text style={{fontSize:5}}>4</Text>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <View>
        
      <View style={{flexDirection:'row'}}>
        <Text>{'\n'}</Text>
        <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;</Text>
      </View>
      
      <View style={{flexDirection:'row', marginTop:-15}}>
      <Text>&nbsp;</Text>
      <View>
          <Text style={{textDecorationLine:'underline', fontSize:8}}>5</Text>
          <Text style={{fontSize:8}}>4</Text>
        </View>
      </View>

        </View>
        <Text style={{marginTop:-10}}>&nbsp;+ c</Text>
      </View>
      </View>
      </View>

      


      <View style={{flexDirection:'row'}}>
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
      <View>
        
      <View style={{flexDirection:'row'}}>
        <Text>4x</Text>
        <View>
          <Text style={{textDecorationLine:'underline', fontSize:5}}>5</Text>
          <Text style={{fontSize:5}}>4</Text>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <View>
        
      <View style={{flexDirection:'row'}}>
        <Text>{'\n'}</Text>
        <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      </View>
      
      <View style={{flexDirection:'row', marginTop:-15}}>
      <Text>&nbsp;5&nbsp;</Text>
      </View>

        </View>
        <Text style={{marginTop:-10}}>&nbsp;+ c</Text>
      </View>
      </View>
      </View>
      
      <View style={{flexDirection:'row'}}>
        <Text>i.) </Text>
        <Text style={{marginTop:5}}>&#8747;&nbsp;</Text>
        <View>
          <Text style={{textDecorationLine:'underline'}}>&nbsp;&nbsp;1&nbsp;&nbsp;</Text>
          <Text>&#8313;&#8730;x</Text>
        </View>
        <Text style={{marginTop:5}}> dx</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&#8730;x&#8315;</Text>
        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:5}}>1</Text>
          <Text style={{fontSize:5}}>9</Text>
        </View>
        <Text>&nbsp;dx</Text>
      
      </View>

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
        <Text style={{marginTop:5}}>&#8747;&nbsp;</Text>
        <View>            

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;x</Text>
        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:5}}>1</Text>
          <Text style={{fontSize:5}}>9</Text>
        </View>
        <Text style={{marginTop:2, fontSize:5}}>&nbsp;+1</Text>
      </View>
          <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <View style={{flexDirection:'row'}}>

        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:8}}>1</Text>
          <Text style={{fontSize:8}}>9</Text>
        </View>
        <Text>+1</Text>
          </View>
        </View>
        <Text style={{marginTop:5}}> + c</Text>
      </View>



      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
        <Text style={{marginTop:5}}>&#8747;&nbsp;</Text>
        <View>            

      <View style={{flexDirection:'row'}}>
        <Text>x</Text>
        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:5}}>8</Text>
          <Text style={{fontSize:5}}>9</Text>
        </View>
      
      </View>
          <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;</Text>
          <View style={{flexDirection:'row'}}>

<Text>&nbsp;</Text>
        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:8}}>8</Text>
          <Text style={{fontSize:8}}>9</Text>
        </View>
          </View>
        </View>
        <Text style={{marginTop:5}}> + c</Text>
      </View>


      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</Text>
        <Text style={{marginTop:5}}>&#8747;&nbsp;</Text>
        <View>            

      <View style={{flexDirection:'row'}}>
        <Text>&nbsp;9x</Text>
        <View>
          <Text style={{textDecorationLine:'underline' ,fontSize:5}}>8</Text>
          <Text style={{fontSize:5}}>9</Text>
        </View>
      
      </View>
          <Text style={{textDecorationLine:'underline', marginTop:-15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <View style={{flexDirection:'row'}}>
<Text>&nbsp;&nbsp;8</Text>
          </View>
        </View>
        <Text style={{marginTop:5}}> + c</Text>
      </View>



      </View>
      
    </ScrollView>
    );
  }
}

class IntegralTrigonometricScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
        <Text>
          Integral Trigonometric{'\n'}{'\n'}
          &#8747; sin x dx = - cos x + c{'\n'}
          &#8747; cos x dx = sin x + c{'\n'}
          &#8747; sec &#178; dx tan x dx = sec x + c {'\n'}
          &#8747; csc &#178; x dx = - cot x + c {'\n'}
          &#8747; sec x + tan x dx = sec x + c {'\n'}
          &#8747; csc x cot x dx = -csc x + c {'\n'}
          &#8747; tan x dx = sec&#178; x + c{'\n'}
          iv. &#8747; sin u du = -cos u + c {'\n'}
          v. &#8747; cos u du = sin u + c {'\n'}
          vi. &#8747; sec&#178; u du = tan u + c {'\n'}
          vii. &#8747; csc&#178; u du = - cot u + c {'\n'}
          viii. &#8747; sec u tan u du = sec u + c {'\n'}
          ix. &#8747; csc u cot u du = -csc u + c {'\n'}
          x. &#8747; tan u du = sec&#178; u + c {'\n'}
        </Text>
        
        <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>xi. &#8747;</Text>
         </View>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             du
           </Text>
           <Text style={{marginStart:4}}>
            u
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + ln |u| + c</Text>
          </View>
       </View>

        <Text>  
          xii. &#8747; e&#x1D41; du  = e&#x1D41; + c {'\n'}
          Ex.{'\n'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 100, height: 150, backgroundColor: 'white'}} >
            <Text>
            1.) &#8747; sin 5x dx{'\n'}
            &nbsp;&nbsp;&nbsp;u = 5x{'\n'}
            </Text>
            <Text style={{textDecorationLine: 'underline', marginStart: 10}}>
            du = 5dx{'\n'}</Text>
            <Text>
            &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5{'\n'}
            </Text>
          </View>
          <View style={{width: 100, height: 150, backgroundColor: 'white'}} >
            <Text>&#8747; sin u du{'\n'}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
               <Text style={{textDecorationLine:'underline'}}>
                1 
               </Text>
               <Text>
                5
              </Text>
              </View>
              <View style={{width: 70, height: 40, backgroundColor: 'white'}} >
               <Text style={{marginVertical:7}}>  
               &#8747; sin u du
              </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
               <Text style={{textDecorationLine:'underline'}}>
                1 
               </Text>
               <Text>
                5
              </Text>
              </View>
              <View style={{width: 90, height: 40, backgroundColor: 'white'}} >
               <Text style={{marginVertical:7}}>  
               &#8747; (-cos u + c)
              </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{width: 60, height: 40, backgroundColor: 'white'}} >
               <Text style={{textDecorationLine:'underline'}}>
                - cos 5x
               </Text>
               <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
              </Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
               <Text style={{marginVertical:7}}>  
               + c
              </Text>
              </View>
            </View>
            <Text>
            </Text>
          </View>
       </View>

       <Text>2.) &#8747; cos 5x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 40, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             sin 5x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;5
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>
       
       <Text>3.) &#8747; 3 cos 10x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 60, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             3 sin 10x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>

       <Text>4.) &#8747; 2 cos 4x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 60, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             2 sin 4x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 40, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             sin 4x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;2
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>

       <Text>5.) &#8747; sec&#178; 3x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 40, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             tan 3x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;3
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View> 

       <Text>6.) &#8747; csc&#178; 2x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             -cot 2x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;2
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>

       <Text>7.) &#8747; csc 9x cos 9x dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             -csc 9x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>

       <Text>8.) &#8747; sin&#8312; x cos x dx</Text>
       <Text>&nbsp;&nbsp;&nbsp;&nbsp; -cos&#8312; x sin x + c</Text>

       <Text>9.) &#8747; (sin x+2 sec&#178;x) dx</Text>
       <Text>&nbsp;&nbsp;&nbsp;&nbsp; -cos x+2 tan x + c </Text>
       
       <Text>10.) &#8747;(csc&#178; 4x + csc 4x cot 4x) dx</Text>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>=</Text>
         </View>
         <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             -cot 4x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
           </Text>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>-</Text>
          </View>
         <View style={{width: 40, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             csc 4x
           </Text>
           <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>

       <Text>Ex.</Text>
       
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>1.) &#8747;</Text>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             1
           </Text>
           <Text>
            x
           </Text>
         </View>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>dx</Text>
          </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> ln x + c</Text>
          </View>
       </View>
       
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>2.) &#8747;</Text>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             7
           </Text>
           <Text>
            x
           </Text>
         </View>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>dx</Text>
          </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> 7 ln x + c</Text>
          </View>
       </View>

       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>3.) &#8747;</Text>
         </View>
         <View style={{width: 80, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             &nbsp;&nbsp;x dx&nbsp;&nbsp;
           </Text>
           <Text>
            x	&#178; + 1
           </Text>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 8, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             1
           </Text>
           <Text>
            2
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> ln u + c</Text>
          </View>
       </View>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}></Text>
         </View>
         <View style={{width: 80, height: 40, backgroundColor: 'white'}} >
           <Text>
             u = x&#178; + 1
           </Text>
           <View style={{flexDirection: 'row'}}>
             <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
               <Text style={{textDecorationLine:'underline'}}>
                 du
               </Text>
                <Text>
                 &nbsp;2
               </Text>
             </View>
             <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
              <Text style={{marginVertical:8}}>=</Text>
             </View>
             <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
              <Text style={{textDecorationLine:'underline'}}>
                 2x dx
               </Text>
                <Text>
                &nbsp;&nbsp;&nbsp;2
               </Text>
             </View>
           </View>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 60, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
           ln (x&#178; + 1)
           </Text>
           <Text>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
           </Text>
         </View>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>
       
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}>4.) &#8747;</Text>
         </View>
         <View style={{width: 80, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             x&#178; dx
           </Text>
           <Text>
            x&#179;	+ 1
           </Text>
         </View>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 8, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             1
           </Text>
           <Text>
            3
           </Text>
         </View>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> &#8747;</Text>
          </View>
        <View style={{flexDirection: 'row'}}>
         <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>du</Text>
           <Text> u</Text>
         </View>
         </View>
       </View>
       <View style={{flexDirection: 'row'}}>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:8}}></Text>
         </View>
         <View style={{width: 80, height: 40, backgroundColor: 'white'}} >
           <Text>
             u = x&#179; + 1
           </Text>
           <View style={{flexDirection: 'row'}}>
             <View style={{width: 20, height: 40, backgroundColor: 'white'}} >
               <Text style={{textDecorationLine:'underline'}}>
                 du
               </Text>
                <Text>
                 &nbsp;3
               </Text>
             </View>
             <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
              <Text style={{marginVertical:8}}>=</Text>
             </View>
             <View style={{width: 50, height: 40, backgroundColor: 'white'}} >
              <Text style={{textDecorationLine:'underline'}}>
                 3x dx
               </Text>
                <Text>
                &nbsp;&nbsp;&nbsp;3
               </Text>
             </View>
           </View>
         </View>
         
        <View>


        <View style={{flexDirection: 'row'}}>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 8, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             1
           </Text>
           <Text>
            3
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> ln u + c</Text>
          </View>
       </View>

       <View style={{flexDirection: 'row'}}>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 8, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             1
           </Text>
           <Text>
            3
           </Text>
         </View>
         <View style={{width: 100, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> ln (x&sup3;+1) + c</Text>
          </View>
       </View>

       <View style={{flexDirection: 'row'}}>
         <View style={{width: 10, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>=</Text>
          </View>
         <View style={{width: 60, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
            <Text style={{marginVertical:6}}> ln (x&sup3;+1)</Text>
           </Text>
           <Text>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
           </Text>
         </View>
         <View style={{width: 30, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}> + c</Text>
          </View>
       </View>
      </View>
       </View>


       <View style={{flexDirection: 'row'}}>
       <Text>5.) &#8747;</Text>
         <View style={{width: 40, height: 40, backgroundColor: 'white'}} >
           <Text style={{textDecorationLine:'underline'}}>
             -sin x
           </Text>
           <Text>
            &nbsp;cos x
           </Text>
         </View>
         <View style={{width: 120, height: 40, backgroundColor: 'white'}} >
           <Text style={{marginVertical:6}}>dx = -ln cos x + c</Text>
          </View>
       </View>
       <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = cos x{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;du = -sin x dx {'\n'}{'\n'}
        </Text>

        <Text>  
          xii. &#8747; e&#x1D41; du  = e&#x1D41; + c {'\n'}{'\n'}
          1.) &#8747; e&#x02E3; dx = e&#x02E3; + c{'\n'}
          2.) &#8747; 8e&#x02E3; dx = 8e&#x02E3; + c{'\n'}
          3.) &#8747; 3e&#178;&#x02E3; dx = 6e&#178;&#x02E3; + c{'\n'}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{paddingTop:3}}>
          4.)	&#8747; e&#179;&#x02E3;
          </Text>
          <Text>
            &#178;
          </Text>
          <Text style={{paddingTop:3}}>
          dx = 6e
          </Text>
          <Text style={{paddingTop:3}}>
          &#179;&#x02E3;
          </Text>
          <Text>
            &#178;
          </Text>
          <Text style={{paddingTop:3}}>
           + c
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>
            5.) &#8747; (sin x + 2sec	&#178; x  + 8e&#178;&#x02E3; - 
          </Text>
          <View>
            <Text style={{textDecorationLine:'underline'}}>
              10
            </Text>
            <Text>
              &nbsp;u
            </Text>
          </View>
          <Text>
            ) dx
          </Text>
        </View>
        <Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= - cos x + 2 tan x + 16e&#178;&#x02E3; - 10 ln x + c
        </Text>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text>
             7.) &#8747; x&#179; (x&#8308; - 5)&#185;&#8304; dx{'\n'}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = x&#8308; - 5{'\n'}
            </Text>
            <View style={{flexDirection:'row'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{textDecorationLine:'underline'}}>
                du
              </Text>
              <Text> = </Text>
              <Text style={{textDecorationLine:'underline'}}>
                4x&#179; dx
              </Text> 
            </View>
            <View style={{flexDirection:'row'}}>
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4
              </Text> 
            </View>
          </View>
          <View style={{marginStart:10}}>
            <Text>
            = &#8747; u&#x1D41; du
            </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}>= </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>
                  1
                </Text>
                <Text>
                  4
                </Text>
              </View>
              <Text style={{marginVertical:6}}>
                &nbsp;&#8747; u&#185;&#8304; du
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}>= </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>1</Text>
                <Text>4</Text>
              </View>
              <Text style={{marginVertical:7}}>
                &nbsp;&nbsp;(&nbsp;
              </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>u&#185;&#8304;&#8314;&#185;</Text>
                <Text>10+1</Text>
              </View>
              <Text>&nbsp;</Text>
              <Text style={{marginVertical:7}}>) + c</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}>= </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>1</Text>
                <Text>4</Text>
              </View>
              <Text style={{marginVertical:7}}>
                &nbsp;&nbsp;(&nbsp;
              </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>u&#185;&#185;</Text>
                <Text>11</Text>
              </View>
              <Text>&nbsp;</Text>
              <Text style={{marginVertical:7}}>) + c</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}>= </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>1</Text>
                <Text>4</Text>
              </View>
              <Text style={{marginVertical:7}}>
                &nbsp;&nbsp;(&nbsp;
              </Text>
              <Text style={{marginVertical:7}}>(x&#8308;-5)&#185;&#185;</Text>
              <Text>&nbsp;</Text>
              <Text style={{marginVertical:7}}>) + c</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}>= </Text>
              <View>
                <Text style={{textDecorationLine:'underline'}}>(x&#8308;-5)&#185;&#185;</Text>
                <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</Text>
              </View>
              <Text>&nbsp;</Text>
              <Text style={{marginVertical:7}}> + c</Text>
          </View>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          

        <View>
          <View style={{flexDirection:'row'}}>
            <View>
            </View>
          <Text style={{paddingTop:3}}>
          8.)	&#8747; x e&#179;&#x02E3;
          </Text>
          <Text>
            &#178;
          </Text>
          <Text style={{paddingTop:3}}>
            &nbsp;dx
          </Text>
          </View>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u = 3x&#178;</Text>
          <View style={{flexDirection:'row'}}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text style={{textDecorationLine:'underline'}}>du</Text>
            <Text> = </Text>
            <Text style={{textDecorationLine:'underline'}}>6x dx</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              6
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              6
            </Text>
          </View>
        </View>


        <View style={{marginStart:10}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}> =  &#8747; </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>6</Text>
            </View>
            <Text style={{marginVertical:7}}>
              &nbsp;e&#x1D41; du
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}> =  &#8747; </Text>
            <View>
              <Text style={{textDecorationLine:'underline'}}>1</Text>
              <Text>6</Text>
            </View>
            <Text style={{marginVertical:7}}>
              &nbsp;e&#x1D41; + c
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginVertical:7}}> =  &#8747; </Text>
            <View>
              <View>
          <View style={{flexDirection:'row'}} >
          <Text style={{paddingTop:3, textDecorationLine:'underline'}}>
          e&#179;&#x02E3;
          </Text>
          <Text>
            &#178;
          </Text>
          </View>
              </View>
              <Text>&nbsp;&nbsp;6</Text>
            </View>
            <Text style={{marginVertical:7}}>
              &nbsp;+ c
            </Text>
          </View>
        </View>
        </View>
        </View>
      </ScrollView>
    );
  }
}

class OnProgressScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 3 }}>
        <View style={{ marginHorizontal: 12 }}>
          <Text>Sorry, this lesson is only available on the next update.</Text>
        </View>
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Functions: {
    screen: FunctionsScreen,
    navigationOptions: {
      title: "Functions",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  Factoring: {
    screen: FactoringScreen,
    navigationOptions: {
      title: "Factoring",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  Polynomial: {
    screen: PolynomialScreen,
    navigationOptions: {
      title: "Polynomial",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  Graphing: {
    screen: GraphingScreen,
    navigationOptions: {
      title: "Graphing",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  oob: {
    screen: oobScreen,
    navigationOptions: {
      title: "Bound Of Zeroes",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  GraphingSineCurve: {
    screen: SineCurveScreen,
    navigationOptions: {
      title: "Graphing Sine Curve",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  LimitOfAFunction: {
    screen: LimitOfAFunctionScreen,
    navigationOptions: {
      title: "Limit Of A Function",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  Continuity: {
    screen: ContinuityScreen,
    navigationOptions: {
      title: "Continuity",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  Derivative: {
    screen: DerivativeScreen,
    navigationOptions: {
      title: "Derivative",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  DifferentiationRule: {
    screen: DifferentiationRuleScreen,
    navigationOptions: {
      title: "Differentiation Rule",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  LeibnizsNotation: {
    screen: LeibnizsNotationScreen,
    navigationOptions: {
      title: "Leibniz's Notation",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  DerivativesOfTrigonometricFunctions: {
    screen: DerivativesOfTrigonometricFunctionsScreen,
    navigationOptions: {
      title: "Derivatives Of Trigonometric Functions",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  DerivativesOfExponentialAndLogarithmicFunctions: {
    screen: DerivativesOfExponentialAndLogarithmicFunctionsScreen,
    navigationOptions: {
      title: "Derivatives Of Exponential And Logarithmic Functions",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  ImplicitDifferentiation: {
    screen: ImplicitDifferentiationScreen,
    navigationOptions: {
      title: "Implicit Differentiation",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  LHopitalsRule: {
    screen: LHopitalsRuleScreen,
    navigationOptions: {
      title: "L'Hopital's Rule",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  PartialDifferentiation: {
    screen: PartialDifferentiationScreen,
    navigationOptions: {
      title: "Partial Differentiation",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  IntegralCalculus: {
    screen: IntegralCalculusScreen,
    navigationOptions: {
      title: "Integral Calculus",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
  IntegralTrigonometric: {
    screen: IntegralTrigonometricScreen,
    navigationOptions: {
      title: "Integral Trigonometric",
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: "#fff",
    }
  },
});

const stylesVar = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},  
});

export default createAppContainer(AppNavigator);
