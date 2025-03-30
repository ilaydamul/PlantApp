import FaqItem from '@/components/elements/FaqItem';
import MailBox from '@/components/elements/MailBox';
import CategoryItem from '@/components/elements/CategoryItem';
import IconInput from '@/components/ui/IconInput';
import Colors from '@/constants/Colors';
import { styles } from '@/constants/styles';
import { fetchCategories } from '@/redux/slices/categoriesSlice';
import { fetchQuestions } from '@/redux/slices/questionsSlice';
import { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [search, onChangeSearch] = useState('');
  const dispatch = useDispatch();
  const { questions } = useSelector((state: any) => state.questions);
  const { categories } = useSelector((state: any) => state.categories);

  const filteredCategories = categories.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    //Fetch questions and categories when component mounts
    dispatch(fetchQuestions() as any);
    dispatch(fetchCategories() as any);
  }, []);

  return (
    <ScrollView style={[styles.layout, { backgroundColor: Colors.bgGray }]}>
      <ImageBackground style={[styles.container, styles.statusHeight,]} source={require('../../assets/images/bg3.png')} resizeMode="cover">
        <Text style={[styles.fsSm, { paddingTop: 20 }]}>Hi, plant lover!</Text>
        <Text style={[styles.fsLg, styles.bold, { marginBottom: 16, marginTop: 8 }]}>Good Afternoon! ⛅</Text>
        <IconInput onChangeValue={(text) => { onChangeSearch(text) }} value={search} placeholderText='Search for plants' icon='search' />
      </ImageBackground>

      <View style={styles.container}>
        {/*If search is empty, show the mailbox and get started section */}
        {search === '' && (
          <>
            <MailBox />
            <Text style={[styles.bold, styles.fsSm, { marginTop: 20, marginBottom: 16 }]}>Get Started</Text>
            <FlatList
              data={questions}
              renderItem={({ item }) => <FaqItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginBottom: 20 }}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </>
        )}

        {/*If search is not empty, show the categories according to the search result*/}
        {filteredCategories.length > 0 ? (
          <View style={{ flexDirection: "row", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            {filteredCategories.map((item: any, index: number) => {
              return (
                <CategoryItem key={index} item={item} />
              );
            })}
          </View>
        ) : search !== '' ? (
          <Text style={{ textAlign: 'center' }}>There are no categories according to your search result.</Text>
        ) : null}
      </View>
    </ScrollView>
  );
}
