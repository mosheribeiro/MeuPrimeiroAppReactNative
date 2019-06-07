import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {

        //this.props.navigation.state.params;
        const people =
        {

            "cell": "(84) 0518-6674",
            "dob": {
                "age": 54,
                "date": "1964-07-30T21:19:05Z",
            },
            "email": "lisandra.peixoto@example.com",
            "gender": {
                "name": "",
                "value": null,
            },
            "location": {
                "city": "botucatu",
                "coordinates": {
                    "latitude": "-53.0550",
                    "longitude": "90.3713",
                },
                "postcode": 79055,
                "state": "mato grosso do sul",
                "street": "7214 rua maranhão ",
                "timezone": {
                    "description": "Hawaii",
                    "offset": "-10:00",
                },
            },
            "login": {
                "md5": "adf537d34885a9f0c85d93c28f98b4a3",
                "password": "alice",
                "salt": "A5teKGcX",
                "sha1": "61fc293da6e86d4c5865a5cc894b17559149e61c",
                "sha256": "ffc3caba397e1885b37f0975fe64b5c7d0a32f1c83632d85df89a5b46e0e3983",
                "username": "beautifulmouse370",
                "uuid": "9b11b626-c6e5-4198-8c11-a46362c2be48",
            },
            "name": {
                "first": "lisandra",
                "last": "peixoto",
                "title": "miss",
            },
            "nat": "BR",
            "phone": "(17) 1692-5548",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg",
            },
            "registered": {
                "age": 13,
                "date": "2006-01-05T02:30:36Z",
            }

        }
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: people.picture.large }}
                    style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <View style={styles.line}>
                        <Text style={styles.cell}>Email:</Text>
                        <Text style={styles.cell}>{people.email}</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1
    },
    container: {
        padding: 15,
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line:{

    }
});