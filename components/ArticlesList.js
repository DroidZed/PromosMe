import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

//custom components:

import Article from './Article';

const ArticlesList = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item, id, separators }) => (
        <Article style={Styling.artiCard} key={String(id)}>
          {item.name}
        </Article>
      )}
    />
  );
};

const Styling = StyleSheet.create({
  artiCard: {},
});

export default ArticlesList;
