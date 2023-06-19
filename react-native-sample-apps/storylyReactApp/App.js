/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { View, Button, Image, Text, PixelRatio,Linking } from 'react-native';
import { Storyly } from 'storyly-react-native';

const PIN_ICON = require('./assets/pin_icon.png'); 
const HOVER_IMG = require('./assets/watch.jpg'); 


const STORYLY_TOKEN = ""

const convertToNative = (size) => {
   return Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(size) : size
}


const CustomPortraitView = ({ storyGroup }) => {
   return (
       <>
           {(storyGroup ? (
               <View style={{ width: 100, height: 178 }}>
                 { storyGroup.index==0 ?

             <><Image style={{
               width: "100%",
               height: "100%",
               borderRadius: 300
               }}
               source={{ uri: storyGroup.iconUrl }} />
               <View style={{ width: 100, height: 178, borderRadius: 300, position: 'absolute', backgroundColor: storyGroup.seen ? "red" : "blue" }}>
                 <View style={{ flexDirection: 'column', width: 90, marginLeft: 5, height: "20%", alignItems: 'center', justifyContent: 'flex-start' }}>
                   {storyGroup.pinned ?
                     <Image style={{ width: 20, height: 20, marginTop: 10, marginBottom: 10, borderRadius: 10 }} source={PIN_ICON} />
                     :
                     <View style={{ width: 20, height: 1, marginTop: 5, marginBottom: 10 }} />}
                 </View>

                 <View style={{ flexDirection: 'column', width: 90, marginLeft: 5, height: "80%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                   <View style={{ width: "100%", marginLeft: 5, height: "70%", alignItems: 'center', justifyContent: 'flex-end' }}>
                     <Image style={{ width: 60, height: 60, marginTop: 5, borderRadius: 30 }} source={HOVER_IMG} />
                   </View>
                   <View style={{ width: "100%", marginLeft: 5, height: "30%", alignItems: 'center', justifyContent: 'flex-end' }}>
                     <Text style={{ marginBottom: 5, flexWrap: 'wrap', width: "90%", textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: "white" }}>{storyGroup.title}</Text>
                   </View>
                 </View>
               </View></>
                   :
             <><Image style={{
               width: "100%",
               height: "100%",
               borderRadius: 8
               }}
               source={{ uri: storyGroup.iconUrl }} 
               />
               <View style={{ width: 100, height: 178, borderRadius: 8, position: 'absolute', backgroundColor: storyGroup.seen ? "#16ad055f" : "#1905ad5f" }}>
                 <View style={{ flexDirection: 'column', width: 90, marginLeft: 5, height: "20%", alignItems: 'center', justifyContent: 'flex-start' }}>
                   {storyGroup.pinned ?
                     <Image style={{ width: 20, height: 20, marginTop: 10, marginBottom: 10, borderRadius: 10 }} source={PIN_ICON} />
                     :
                     <View style={{ width: 20, height: 1, marginTop: 5, marginBottom: 10 }} />}
                 </View>

                 <View style={{ flexDirection: 'column', width: 90, marginLeft: 5, height: "80%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                   <View style={{ width: "100%", marginLeft: 5, height: "70%", alignItems: 'center', justifyContent: 'flex-end' }}>
                   </View>
                   <View style={{ width: "100%", marginLeft: 5, height: "30%", alignItems: 'center', justifyContent: 'flex-end' }}>
                     <Text style={{ marginBottom: 5, flexWrap: 'wrap', width: "90%", textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: "white" }}>{storyGroup.title}</Text>
                   </View>
                 </View>
               </View></>
                 
                 }
                   
               </View>
           ) : (
               <View style={{width: "100%", height: "100%",  borderRadius: 8 }}></View>
           ))}
       </>
   )
}



export default class App extends Component {
    render() {
        return (
            <View>
                <Storyly
                    style={{ width: '100%', height: 120, marginTop: 50 }}
                    storylyId={STORYLY_TOKEN}
                    storyGroupSize="large"
                    onLoad={loadEvent => {
                        console.log(`[Storyly] default - onLoad`);
                    }}
                    onFail={errorMessage => {
                        console.log(`[Storyly] default - onFail ${errorMessage}`);
                    }}
                     onPress={e => {
                        if (e.media.actionUrl) Linking.openURL(e.media.actionUrl)
                         console.log(`[Storyly] default - onPress`, e.media.actionUrl);
                     }}
                    /*onEvent={event => {{
                        "event" == "StoryCompleted" ? 
                            console.log( `[Storyly] default - StoryCompleted`)
                        :
                            console.log( `[Storyly] default - not Complated`)
                        }
                    }}*/
                    onEvent={eventPayload => {
                       
                        console.log(`[Storyly] default - onEvent ${JSON.stringify(eventPayload.event)} StoryID:${JSON.stringify(eventPayload.story.id)} `)
                        
                    }}
                    onStoryOpen={() => {
                        console.log("[Storyly] default - onStoryOpen");
                    }}
                    onStoryClose={() => {
                        console.log("[Storyly] default - onStoryClose");
                    }}
                    onUserInteracted={interactionEvent => {
                        console.log(`[Storyly] default - onStoryUserInteracted`);
                    }}/>
                <Storyly
                    ref={ref => { this.customStoryly = ref }}
                    style={{ width: '100%', height: 180, marginTop: 10 }}
                    storylyId={STORYLY_TOKEN}
                    storylyUserProperty={{"name": "TestUser", "surname": "TastLastName"}}
                    storyGroupTextColorNotSeen={"#FF0000"}
                    storyGroupIconBorderColorNotSeen={["#FFFF00", "#FF00FF"]}
                    storyGroupIconBorderColorSeen={["#FFFFFF", "#FF000010"]}
                    storyGroupIconBackgroundColor={"#000000"}
                    storyGroupSize="custom"
                    storyGroupIconHeight={ Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(70) : 70 }
                    storyGroupIconWidth={ Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(70) : 70 }
                    storyGroupIconCornerRadius={ Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(20) : 20 }
                    storyGroupTextSize={ Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(20) : 20 }
                    storyGroupTextLines={3}
                    storyGroupTextTypeface={"Lobster1.4.otf"}
                    storyGroupTextColorSeen={"#00FF00"}
                    storyGroupPinIconColor={"#000000"}
                    storyHeaderShareIcon={"share_icon"}
                    storyHeaderCloseIcon={"close_icon"}
                    storylyLayoutDirection={"ltr"}
                    storyItemTextTypeface={"Lobster1.4.otf"}
                    storyInteractiveTextTypeface={"Lobster1.4.otf"}
                    onLoad={loadEvent => {
                       //  console.log(`[Storyly] onLoad ${JSON.stringify(loadEvent.storyGroupList)}`);
                    }}
                    onFail={errorMessage => {
                        console.log(`[Storyly-2] onFail ${errorMessage}`);
                    }}
                    onPress={e => {
                        if (e.media.actionUrl) Linking.openURL(e.media.actionUrl)
                         console.log(`[Storyly] default - onPress`, e.media.actionUrl);
                    }}
                    onEvent={eventPayload => {
                        console.log(`[Storyly-2] onEvent`);
                    }}
                    onStoryOpen={() => {
                        console.log("[Storyly-2] onStoryOpen");
                    }}
                    onStoryClose={() => {
                        console.log("[Storyly-2] onStoryClose");
                    }}
                    onUserInteracted={interactionEvent => {
                        console.log(`[Storyly-2] onStoryUserInteracted`);
                    }}/>
                 <Storyly
                    ref={ref => { this.storyly = ref }}
                    style={{ width: '100%', height: convertToNative(178), marginTop: 10, marginBottom: 10}}
                    storylyId={STORYLY_TOKEN}
                    storyGroupViewFactory={{
                       width: convertToNative(100),
                       height: convertToNative(178),
                       customView: CustomPortraitView
                   }}
                    onLoad={loadEvent => {
                        console.log(`[Storyly] onLoad`);
                    }}
                    onFail={errorMessage => {
                        console.log(`[Storyly] onFail ${errorMessage}`);
                    }}
                    onPress={pressEvent => {
                        console.log(`[Storyly] onPress ${JSON.stringify(pressEvent)}`);
                    }}
                    onEvent={eventPayload => {
                        console.log(`[Storyly] onEvent ${JSON.stringify(eventPayload)}`);
                    }}
                    onStoryOpen={() => {
                        console.log("[Storyly] onStoryOpen");
                    }}
                    onStoryClose={() => {
                        console.log("[Storyly] onStoryClose");
                    }}
                    onStoryOpenFailed={(message) => {
                        console.log(`[Storyly] onStoryOpenFailed ${message}`)
                    }}
                    onUserInteracted={interactionEvent => {
                        console.log(`[Storyly] onStoryUserInteracted ${JSON.stringify(interactionEvent)}`);
                    }}/>
                <Button
                    onPress={() => { this.storyly.refresh(); }}
                    title="Refresh"
                />
            </View>
        );
    }
}