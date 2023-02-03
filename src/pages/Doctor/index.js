import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor} from '../../components'
import { colors, fonts, showError } from '../../utils'
import {Fire} from '../../config'

const Doctor = ({navigation}) => {
    const [news, setNews] = useState([])
    const [categoryDoctor, setCategoryDoctor] = useState([])
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        getCategoryDoctor()
        getTopRatedDoctors()
        getNews()
    }, [])

    const getTopRatedDoctors = () => {
        Fire.database().ref('doctors/')
        .orderByChild('rate').limitToLast(3)
        .once('value').then(res => {
            if (res.val()) {
                const listObject = res.val()
                const data = []
                Object.keys(listObject).map(key => {
                    data.push({
                        id: key,
                        data: listObject[key]
                    })
                })
                setDoctors(data)
            }
        }).catch(err => {
            showError(err.message)
        })
    }

    const getCategoryDoctor = () => {
        Fire.database().ref('category_doctor/').once('value').then(res => {
            if (res.val()) {
                setCategoryDoctor(res.val())
            }
        }).catch(err => {
            showError(err.message)
        })
    }

    const getNews = () => {
        Fire.database().ref('news/').once('value').then(res => {
            if (res.val()) {
                setNews(res.val())
            }
        }).catch(err => {
            showError(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap heigth={30} />
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
                        <Text style={styles.welcomeText}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScrollCat}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32}/>
                                {
                                    categoryDoctor.map(item => {
                                        return <DoctorCategory category={item.category} key={item.id} onPress={() => navigation.navigate('ChooseDoctor', item)}/>
                                    })
                                }
                                <Gap width={22}/>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        {
                            doctors.map(doctor => {
                                return (
                                    <RatedDoctor 
                                        desc={doctor.data.profession} 
                                        key={doctor.data.uid} 
                                        name={doctor.data.fullName} 
                                        avatar={{ uri : doctor.data.photo }}
                                        onPress={() => navigation.navigate('DoctorProfile', doctor)}
                                        />
                                )
                            })
                        }
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    {
                        news.map(item => {
                            return (
                                <NewsItem title={item.title} date={item.date} image={item.image} key={item.id}/>
                            )
                        })
                    }
                    <Gap heigth={30}/>
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex: 1,
    },
    content : {
        backgroundColor : colors.white,
        flex: 1,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    welcomeText : {
        marginTop : 30,
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        width : 211,
        marginBottom : 16
    },
    category : {
        flexDirection : 'row',
    },
    wrapperScrollCat : {
        marginHorizontal : -16
    },
    sectionLabel : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginBottom : 16
    },
    wrapperSection : {
        paddingHorizontal : 16
    }
})