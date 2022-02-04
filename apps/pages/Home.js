import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SvgUri } from 'react-native-svg';
import styles from '../style/styles';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_utama: [
        {
          title: "ePay Slip",
          img: require('../../assets/epayslip-icon.svg')
        },
        {
          title: "BPJS",
          img: require('../../assets/bpjs-icon.svg'),
        },
        {
          title: "Loan",
          img: require('../../assets/loan-icon.svg'),
        },
      ],
      category: [
        [
          {
            title: "Applycant",
            img: require('../../assets/applicant.png')
          },
          {
            title: "Bookmark",
            img: require('../../assets/bookmark.png')
          },
        ],
        [
          {
            title: "Job posting",
            img: require('../../assets/job-posting.png')
          },
          {
            title: "Your Project",
            img: require('../../assets/your-project.png')
          },
        ]
      ]
    };
  }

  render() {
    const { menu_utama, category } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head2} />
          <View style={styles.fab_btn_home}>
            <Icon name="bell" type="font-awesome" size={15} color="#FFF" />
          </View>
          <View style={styles.fab_btn_home}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              source={require('../../assets/profile.jpeg')}
              style={styles.profile}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.form_search}>
            <Icon name="search" type="feather" size={20} color="#999" />
            <Text style={styles.tx_search}>Search your job</Text>
          </View>
          <Text style={[styles.title_welcome, { marginBottom: 5 }]}>Welcome to Kerja 365</Text>
          <Text style={styles.subtitle_welcome}>Arrange all your need here</Text>
          <View style={styles.form_utama}>
            {
              menu_utama.map((key, i) => (
                <View key={i} style={styles.col_utama}>
                  <SvgUri
                    width="20"
                    height="20"
                    uri={resolveAssetSource(key.img).uri}
                  />
                  <Text style={styles.tx_utama}>{key.title}</Text>
                </View>
              ))
            }
          </View>
          <Text style={styles.title_content}>Service By Category</Text>
          <Text style={styles.subtitle_welcome}>Find what you need</Text>
          <View style={styles.form_category}>
            {
              category.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                  {
                    item.map((key, i) => (
                      <View key={i} style={styles.col_category}>
                        <View style={styles.bg_img_category}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={key.img}
                            style={styles.img_category}
                          />
                        </View>
                        <Text style={styles.tx_category}>{key.title}</Text>
                      </View>
                    ))
                  }
                </View>
              ))
            }
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
