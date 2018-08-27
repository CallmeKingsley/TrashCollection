import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const handleTabPress = (index, multiple, selectedIndex,text, onTabPress) => {
  if (multiple) {
      onTabPress(index);
  }
  else if (selectedIndex !== index) {
      onTabPress(index,text);
      
  }
}; 
const handlerTabItem = (item,onTabItem) =>{
    
  onTabItem(item);

}
const TabOption = ({
    onTabItem,
    isTabActive, index, badge, text,
    firstTabStyle, lastTabStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            onPress={() => onTabPress(index)}
           // onPress={() => onTabItem(index)}
            activeOpacity={1}>
            <View style={{ flexDirection: "row" }}>
                <Text style={[
                    styles.tabTextStyle,
                    tabTextStyle,
                    isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}
                    numberOfLines={textNumberOfLines}
                    allowFontScaling={allowFontScaling}
                    ellipsizeMode="tail">
                    {text}
                </Text>
                {
                    badge ?
                        <View style={[
                            styles.tabBadgeContainerStyle,
                            tabBadgeContainerStyle,
                            isTabActive ? [styles.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] : {}]}>
                            <Text style={[
                                styles.tabBadgeStyle,
                                tabBadgeStyle,
                                isTabActive ? [styles.activeTabBadgeStyle, activeTabBadgeStyle] : {}]}
                                allowFontScaling={allowFontScaling}>
                                {badge}
                            </Text>
                        </View> : false
                }
            </View>
        </TouchableOpacity>
    );
}

const SegmentedControlTab = ({
  multiple, selectedIndex, selectedIndices, values,
  badges, borderRadius, tabsContainerStyle,
  tabStyle, activeTabStyle,
  tabTextStyle, activeTabTextStyle,
  tabBadgeContainerStyle, activeTabBadgeContainerStyle,
  tabBadgeStyle, activeTabBadgeStyle,
  onTabPress, textNumberOfLines,
  allowFontScaling,
}) => {

  const firstTabStyle = [{ borderRightWidth: values.length == 2 ? 1 : 0, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
  const lastTabStyle = [{ borderLeftWidth: 0, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }]

  return (
      <View
          style={[styles.tabsContainerStyle, tabsContainerStyle]}
          removeClippedSubviews={false}>
          {
              values.map((item, index) => {
                  return (
                      <TabOption
                          key={index}
                          index={index}
                          badge={badges && badges[index] ? badges[index] : false}
                          isTabActive={multiple ? selectedIndices.includes(index) : selectedIndex === index}
                          text={item}
                          textNumberOfLines={textNumberOfLines}
                         // onTabItem={(item) => handlerTabItem(item,onTabItem)}
                          onTabPress={(index) => handleTabPress(index, multiple, selectedIndex,item, onTabPress)}
                          firstTabStyle={index === 0 ? [{ borderRightWidth: 0 }, firstTabStyle] : {}}
                          lastTabStyle={index === values.length - 1 ? [{ borderLeftWidth: 0 }, lastTabStyle] : {}}
                          tabStyle={[tabStyle, index !== 0 && index !== values.length - 1 ? { marginLeft: -1 } : {}]}
                          activeTabStyle={activeTabStyle}
                          tabTextStyle={tabTextStyle}
                          activeTabTextStyle={activeTabTextStyle}
                          tabBadgeContainerStyle={tabBadgeContainerStyle}
                          activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                          tabBadgeStyle={tabBadgeStyle}
                          activeTabBadgeStyle={activeTabBadgeStyle}
                          allowFontScaling={allowFontScaling}
                      />
                  );
              })
          }
      </View>
  );
};

SegmentedControlTab.propTypes = {
  values: PropTypes.array,
  badges: PropTypes.array,
  multiple: PropTypes.bool,
  onTabPress: PropTypes.func,
  onTabItem : PropTypes.func,
  selectedIndex: PropTypes.number,
  selectedIndices: PropTypes.arrayOf(PropTypes.number),
  tabsContainerStyle: ViewPropTypes.style,
  tabStyle: ViewPropTypes.style,
  activeTabStyle: ViewPropTypes.style,
  tabTextStyle: Text.propTypes.style,
  activeTabTextStyle: Text.propTypes.style,
  tabBadgeContainerStyle: Text.propTypes.style,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
  borderRadius: PropTypes.number,
  textNumberOfLines: PropTypes.number,
  allowFontScaling: PropTypes.bool,
};

SegmentedControlTab.defaultProps = {
  values: ['One', 'Two', 'Three'],
  badges: ['', '', ''],
  multiple: false,
  selectedIndex: 0,
  selectedIndices: [0],
  onTabPress() { },
  onTabItem() { },
  tabsContainerStyle: {},
  tabStyle: {},
  activeTabStyle: {},
  tabTextStyle: {},
  activeTabTextStyle: {},
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
  borderRadius: 5,
  textNumberOfLines: 1,
  allowFontScaling: true,
};

const styles = StyleSheet.create({
  tabsContainerStyle: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      
  },
  tabStyle: {
      paddingVertical: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: 'rgba(157, 164, 171, 1.0)',
      borderRadius: 10,
      borderWidth: .5,
  },
  activeTabStyle: {
      backgroundColor: 'rgba(97, 193, 103, 1.0)',
      borderRadius: 10,
      borderWidth: .5,
  },
  tabTextStyle: {
      color: 'black'
  },
  activeTabTextStyle: {
      color: 'white'
  },
  tabBadgeContainerStyle: {
      borderRadius: 20,
      backgroundColor: 'red',
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 5,
      marginBottom: 3,
      //borderRadius: 10,
     // borderWidth: .5,
  },
  activeTabBadgeContainerStyle: {
      backgroundColor: 'white'
  },
  tabBadgeStyle: {
      color: 'white',
      fontSize: 11,
      fontWeight: 'bold'
  },
  activeTabBadgeStyle: {
      color: 'black'
  }
});

export default SegmentedControlTab