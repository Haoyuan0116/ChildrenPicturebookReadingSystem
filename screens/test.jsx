export const Robot = ({ Voiceid, textnum, showVoiceButton = true }) => {
    console.log(Voiceid);
    const [showBox, setShowBox] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // 用于保存音频播放状态
    const [sound, setSound] = useState(null); // 用于保存音频对象
  
    const playSound = async ({ url }) => {
      if (isPlaying) { // 如果当前正在播放音频，则停止播放
        await sound.stopAsync();
        setIsPlaying(false);
        return;
      }
  
      console.log('VoiceData[url]');
      console.log(VoicesData[url]);
      // console.log(url);
      const { sound: newSound } = await Audio.Sound.createAsync(VoicesData[url].url);
      await newSound.playAsync();
      setIsPlaying(true);
      setSound(newSound);
    };
  
    const setbox = () => {
      setShowBox(!showBox);
    };
  
    const textIn = TextData.find(item => item.id === textnum)?.text;
    // console.log('robot');
    // console.log(showBox);
    return (
      // <TouchableOpacity onPress={() => {playSound(urlgive);}}>
      <View style={{ flexDirection: 'row', width: 540 }}>
        <TouchableOpacity onPress={() => { playSound({ url: Voiceid }), setbox() }}>
          <View style={styles.assiant}>
            <Image source={require('../assets/images/Robot.png')} />
          </View>
        </TouchableOpacity>
  
        {showBox && <View style={styles.messagebox}>
          <View style={styles.messageboxinner}>
            <View style={{ margin: 15 }}>
              <Text style={{ fontFamily: 'Muyao', fontSize: 20, color: '#84473A' }}>{textIn}</Text>
            </View>
            {showVoiceButton && <View style={{ bottom: 10, right: 340, position: 'absolute' }}><Voicebut /></View>}
          </View>
        </View>}
      </View>
  
  
    );
  };
  