    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow
     */

    import React, {Component} from 'react';
    import {StyleSheet, View} from 'react-native';
    import {VlcSimplePlayer, VLCPlayer}  from 'react-native-vlcplayer-wrap';


    export default class App extends Component<Props> {
        render() {
            return (
                <View style={styles.container}>
                <VlcSimplePlayer
                    autoplay={false}
                    //url='rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov'
                    //url='rtsp://127.0.0.1:8554/'
                    //url='http://bxyzvideo.doctorz.cn:8080/add2019/9.mp4'
                    url='http://192.168.0.10:8888/'   //plase follow this rule, input current IP address
                    initType={2}
                    hwDecoderEnabled={1}
                    hwDecoderForced={1}
                    initOptions={[
                        "--no-audio",
                        "--rtsp-tcp",
                        "--network-caching=" + 150,
                        "--rtsp-caching=" + 150,
                        "--no-stats",
                        "--tcp-caching=" + 150,
                        "--realrtsp-caching=" + 150,
                    ]}
                />
                <VLCPlayer
                    style={{width:"100%",height:200,marginTop:30}}
                    //source={{uri:'rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov'}}
                    //source={{uri:'rtsp://127.0.0.1:8554/my/'}}
                    //source={{uri:'rtsp://127.0.0.1:8554/test/BigBuckBunny.mp4'}}
                    source={{uri:'http://192.168.0.10:8888/'}}//plase follow this rule, input current IP address
                    initType={2}
                    initOptions={[
                        "--network-caching=" + 150,
                        "--rtsp-caching=" + 150,
                        "--no-stats",
                        "--tcp-caching=" + 150,
                        "--realrtsp-caching=" + 150,
                    ]}
            />
            </View>
        );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
    });