import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ width: "90%" }}>
          <TouchableOpacity>
            <Image style={{ width: "100%", height: 250 }}
              resizeMode="contain"
              source={require('./images/ProductsDetail/bag-1.jpg')} />
          </TouchableOpacity>

          <View style={{ width: "100%" }}>
            <ScrollView
              horizontal={true}
              style={{ width: "100%" }}
              showsHorizontalScrollIndicator={false}>

              <TouchableOpacity style={{ margin: 5 }}>
                <Image style={{ width: 100, height: 128 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-1.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 5 }}>
                <Image style={{ width: 100, height: 128 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-2.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 5 }}>
                <Image style={{ width: 100, height: 128 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-3.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 5 }}>
                <Image style={{ width: 100, height: 128 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-4.jpg')} />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: "400", fontSize: 28 }}>Backpack double strap</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: "center", marginBottom: 10 }}>
            <FontAwesome name="star" size={16} color="#FFAA43" />
            <FontAwesome name="star" size={16} color="#FFAA43" />
            <FontAwesome name="star" size={16} color="#FFAA43" />
            <FontAwesome name="star-half-empty" size={16} color="#FFAA43" />
            <FontAwesome name="star-o" size={16} color="#FFAA43" />
            <Text style={{ paddingHorizontal: 5, borderRightWidth: 1, borderRightColor: 'gray', fontSize: 16, color: "gray" }}>4.9</Text>
            <Text style={{ paddingHorizontal: 5, paddingBottom: 2, fontSize: 16, color: "gray" }}>Đã bán 2.4k</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ color: "red", fontSize: 20, fontWeight: "400", paddingRight: 10 }}> 418.000₫ ~ 500.000₫</Text>
            <Text>
              (
              <Text style={{ textDecorationLine: 'line-through', color: 'gray', fontSize: 20 }}>
                618.000₫
              </Text>
              )
            </Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "gray" }}>
              Lacinia porta aenean conubia a ut integer ultrices cras a laoreet erat iaculis mollis cursus ante consectetur consectetur qisque vel rutrum elementum dis a class tempus a.Adipiscing a condimentum condimentum.
            </Text>
          </View>
          {/* Kich thuoc */}
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: '400', paddingBottom: 3 }}>Size:</Text>
            <TouchableOpacity>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>S</Text>
              </View>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>M</Text>
              </View>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>L</Text>
              </View>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>XL</Text>
              </View>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>XXL</Text>
              </View>
              <Text></Text>
            </TouchableOpacity>
          </View>
          {/* 
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={{ backgroundColor: "gray", width: 20, heigh: 50 }}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(this.setState({inputText:text}))}
              value={this.state.inputText} />
            <TouchableOpacity>
              <View style={{ backgroundColor: "gray", width: 20, heigh: 50 }}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View> */}

          {/* Danh gia san pham */}
          <View >
            <View style={{ flexDirection: 'row', paddingVertical: 10, borderBottomColor: 'gray', borderBottomWidth: 0.5, alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '400', fontSize: 16, paddingBottom: 5 }}>ĐÁNH GIÁ SẢN PHẨM</Text>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={16} color="#FFAA43" />
                  <FontAwesome name="star-o" size={16} color="#FFAA43" />
                  <Text style={{ paddingRight: 5 }}>4.9/5</Text>
                  <Text>(235 đánh giá)</Text>
                </View>
              </View>
              <View style={{ width: 100 }}>
                <Text>Xem tất cả <AntDesign name="right" size={16} color="black" /></Text>
              </View>
            </View>

            {/* cmt cua tung ng */}
            <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: "gray" }}>
              <Text style={{ fontSize: 16 }}>
                Hình ảnh từ người mua
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('./images/ProductsDetail/bag-1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('./images/ProductsDetail/bag-2.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('./images/ProductsDetail/bag-3.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('./images/ProductsDetail/bag-4.jpg')} />

                  <View style={{ position: "absolute", top: 0, width: 75, height: 96, opacity: 0.5, backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>+44</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* Item tung comment */}
            <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: "gray", borderBottomWidth: 0.5 }}>
              <View style={{ marginHorizontal: 10, marginVertical: 5, width: 20, height: 20, borderRadius: 10, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="user-alt" size={10} color="#2f435c" />
              </View>
              <View style={{ flex: 1, margin: 5 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: "gray" }}>User</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end', width: 40, justifyContent: "space-between" }}>
                    <AntDesign name="like1" size={16} color="gray" />
                    <Entypo name="dots-three-horizontal" size={16} color="gray" />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={10} color="#FFAA43" />
                  <FontAwesome name="star-o" size={10} color="#FFAA43" />
                </View>
                <View style={{ margin: 5 }}>
                  <Text>
                    E chào cô. Do một số lý do gì đó mà tài khoản của e không được quét nộp tiền học. Cô cho e hỏi giờ e làm sao ạ. Vì mai e thi mà kiểm tra thấy tài khoản vẫn còn tiền ạ
                  </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ color: 'gray', fontSize: 13 }}>2020/07/02 12:42</Text>
                </View>

                <View style={{ backgroundColor: "#e6e7e8", padding: 5 }}>
                  <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>Phản hồi của người bán</Text>
                  <Text style={{ fontSize: 13 }}>
                    Shop cảm ơn bạn nhé!
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: "gray", borderBottomWidth: 0.5 }}>
              <View style={{ marginHorizontal: 10, marginVertical: 5, width: 20, height: 20, borderRadius: 10, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="user-alt" size={10} color="#2f435c" />
              </View>
              <View style={{ flex: 1, margin: 5 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: "gray" }}>User</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end', width: 40, justifyContent: "space-between" }}>
                    <AntDesign name="like1" size={16} color="gray" />
                    <Entypo name="dots-three-horizontal" size={16} color="gray" />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={10} color="#FFAA43" />
                  <FontAwesome name="star-o" size={10} color="#FFAA43" />
                </View>
                <View style={{ margin: 5 }}>
                  <Text>
                    E chào cô. Do một số lý do gì đó mà tài khoản của e không được quét nộp tiền học. Cô cho e hỏi giờ e làm sao ạ. Vì mai e thi mà kiểm tra thấy tài khoản vẫn còn tiền ạ
                  </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ color: 'gray', fontSize: 13 }}>2020/07/02 12:42</Text>
                </View>

                <View style={{ backgroundColor: "#e6e7e8", padding: 5 }}>
                  <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>Phản hồi của người bán</Text>
                  <Text style={{ fontSize: 13 }}>
                    Shop cảm ơn bạn nhé!
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: "gray", borderBottomWidth: 0.5 }}>
              <View style={{ marginHorizontal: 10, marginVertical: 5, width: 20, height: 20, borderRadius: 10, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="user-alt" size={10} color="#2f435c" />
              </View>
              <View style={{ flex: 1, margin: 5 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: "gray" }}>User</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end', width: 40, justifyContent: "space-between" }}>
                    <AntDesign name="like1" size={16} color="gray" />
                    <Entypo name="dots-three-horizontal" size={16} color="gray" />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={10} color="#FFAA43" />
                  <FontAwesome name="star-o" size={10} color="#FFAA43" />
                </View>
                <View style={{ margin: 5 }}>
                  <Text>
                    E chào cô. Do một số lý do gì đó mà tài khoản của e không được quét nộp tiền học. Cô cho e hỏi giờ e làm sao ạ. Vì mai e thi mà kiểm tra thấy tài khoản vẫn còn tiền ạ
                  </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ color: 'gray', fontSize: 13 }}>2020/07/02 12:42</Text>
                </View>

                <View style={{ backgroundColor: "#e6e7e8", padding: 5 }}>
                  <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>Phản hồi của người bán</Text>
                  <Text style={{ fontSize: 13 }}>
                    Shop cảm ơn bạn nhé!
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: "gray", borderBottomWidth: 0.5 }}>
              <View style={{ marginHorizontal: 10, marginVertical: 5, width: 20, height: 20, borderRadius: 10, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="user-alt" size={10} color="#2f435c" />
              </View>
              <View style={{ flex: 1, margin: 5 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: "gray" }}>User</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end', width: 40, justifyContent: "space-between" }}>
                    <AntDesign name="like1" size={16} color="gray" />
                    <Entypo name="dots-three-horizontal" size={16} color="gray" />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star" size={10} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={10} color="#FFAA43" />
                  <FontAwesome name="star-o" size={10} color="#FFAA43" />
                </View>
                <View style={{ margin: 5 }}>
                  <Text>
                    E chào cô. Do một số lý do gì đó mà tài khoản của e không được quét nộp tiền học. Cô cho e hỏi giờ e làm sao ạ. Vì mai e thi mà kiểm tra thấy tài khoản vẫn còn tiền ạ
                  </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                    <Image style={{ width: 75, height: 96 }}
                      resizeMode="contain"
                      source={require('./images/ProductsDetail/bag-2.jpg')} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ color: 'gray', fontSize: 13 }}>2020/07/02 12:42</Text>
                </View>

                <View style={{ backgroundColor: "#e6e7e8", padding: 5 }}>
                  <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>Phản hồi của người bán</Text>
                  <Text style={{ fontSize: 13 }}>
                    Shop cảm ơn bạn nhé!
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 14, color: 'red' }}>Xem Tất Cả (851)</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View>
            <View style={{flexDirection:"row"}}>
              <Text style={{ fontWeight: '500', flex:1, fontSize:14 }}>Sản phẩm tương tự</Text>
              <TouchableOpacity style={{ width: 100 }}>
                <Text style={{fontSize:14, color:'red', paddingBottom:3}}>Xem tất cả <AntDesign name="right" size={14} color="red" /></Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-1.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-2.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-3.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-4.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-1.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('./images/ProductsDetail/bag-2.jpg')} />
                <View>
                  <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleHolder: {
    position: "absolute",
    top: 3,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2
  },
});
