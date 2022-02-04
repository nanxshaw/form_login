import { Dimensions, StyleSheet } from "react-native";import { getStatusBarHeight } from 'react-native-status-bar-height';
const STATUS_BAR_HEIGHT = getStatusBarHeight();
const width_hp = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        paddingTop: STATUS_BAR_HEIGHT+10,
        backgroundColor: "transparent",
        flexDirection:"row",
        zIndex:2,
        justifyContent:'center',
    },
    head:{
        width:width_hp-100,
    },
    head2:{
        width:width_hp-80,
    },
    fab_btn_back: {
        backgroundColor: "#f9f9f9",
        borderRadius: 20,
        height: 30,
        width: 30,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    fab_btn_en: {
        backgroundColor: "#1571dd",
        borderRadius: 20,
        height: 30,
        width: 30,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
    },
    tx_head: {
        color: '#FFF',
        fontSize: 12
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    bg_img_start: {
        backgroundColor: '#f1f2f1',
        width: width_hp - 40,
        height: (width_hp - 40) * 1.2,
        borderRadius: 30,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        marginBottom:10,
        marginTop:-40,
        zIndex:1
    },
    img_start: {
        width: width_hp,
        height: width_hp,
        borderRadius: 30
    },
    title_start: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#171717",
        textAlign: 'center',
        marginBottom: 2
    },
    subtitle_start: {
        fontSize: 11,
        color: "#171717",
        textAlign: 'center'
    },
    footer_start: {
        flexDirection: "row",
        bottom:100,
        position:'absolute'
    },
    btn_out: {
        borderWidth: 1,
        borderColor: "#f4f4f4",
        padding: 15,
        margin: 10,
        width:width_hp/2-20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
    },
    btn_primary: {
        backgroundColor: "#1571dd",
        padding: 15,
        margin: 10,
        borderRadius: 5,
        width:width_hp/2-20,
        justifyContent: "center",
        alignItems: 'center'
    },
    tx_btn_out: {
        color: "#171717",
        fontSize: 13,
        fontWeight: "700"
    },
    tx_btn_primary: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "700"
    },
    content:{
        padding:10,
    },
    title_welcome:{
        fontWeight:"bold",
        fontSize:17,
        marginBottom:7
    },
    tx_gray: {
        color: "#666",
        fontSize: 12,
        marginBottom:30
    },
    form_in:{
        marginBottom:10
    },
    tx_in:{
        fontSize:12,
        color:'#000'
    },
    in:{
        backgroundColor:"#f6f6f6",
        padding:12,
        borderRadius:5,
        marginTop:7,
        flexDirection:'row'
    },
    tx_forget:{
        color:"#1571dd",
        fontSize:11,
        marginBottom:20
    },
    btn_primary_full:{
        backgroundColor: "#1571dd",
        height:45,
        margin: 10,
        borderRadius: 5,
        width:width_hp-20,
        alignSelf:'center',
        justifyContent: "center",
        alignItems: 'center'
    },
    footer_login:{
        position:"absolute",
        bottom:100,
        alignSelf:'center'
    },
    tx_fot_login:{
        fontSize:12,
        textAlign:'center'
    },
    row_social:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:60
    },
    bg_icon_social:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F2F2F2',
        width:70,
        margin:10,
        height:50
    },
    img_social:{
        width:30,
        height:30,
    },
    form_search:{
        borderWidth:1,
        borderRadius:20,
        borderColor:'#F2F2F2',
        flexDirection:'row',
        padding:10,
        marginBottom:20
    },
    tx_search:{
        color:'#999',
        marginLeft:10
    },
    subtitle_welcome:{
        fontSize:12
    },
    form_utama:{
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#f3f5f7",
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    col_utama:{
        width:"33.33333%",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    img_utama:{
        width:40,
        height:40
    },
    tx_utama:{
        color:'#999',
        fontSize:12
    },
    title_content:{
        fontSize:14,
        color:'#000',
        marginBottom:5,
        fontWeight:"bold"
    },
    form_category:{
        borderWidth:1,
        borderRadius:10,
        padding:5,
        marginTop:20,
        borderColor:'#F2F2F2',
    },
    col_category:{
        backgroundColor:"#f3f5f7",
        borderRadius:10,
        padding:10,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:'row',
        width:"47%",
        margin:5
    },
    bg_img_category:{
        backgroundColor:"#1571dd",
        width:35,
        marginRight:10,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    img_category:{
        width:20,
        height:20
    },
    tx_category:{
        color:"#000",
        fontSize:12
    },
    fab_btn_home: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        marginRight:10,
        height: 30,
        width: 30,
        // alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    profile:{
        height: 30,
        width: 30,
        borderRadius:15
    }

})

export default styles