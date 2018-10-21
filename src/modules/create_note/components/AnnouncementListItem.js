import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { Card, CardSection } from '../../../components';

const AnnouncementListItem = props => {
  const { onPress } = props;
  const { item, quantity, price } = props.data;
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ flex: 1 }}>{item}</Text>
          <Text style={{ flex: 1 }}>{quantity}</Text>
          <Text style={{ flex: 1 }}>{price}</Text>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
});

export default AnnouncementListItem;
