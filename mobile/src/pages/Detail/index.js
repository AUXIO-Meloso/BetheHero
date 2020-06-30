import React, { useState, useEffect } from 'react'
import { useRoute,  } from '@react-navigation/native'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer'

import styles from './styles';

import logo from '../../assets/logo.png';

export default function Detail({ navigation }) {
    const incident = useRoute().params.incident
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`;

    function sendWhatsaap() {
        Linking.openURL(`whatsapp://send?phone=+5562986038840&text=${message}`)
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: [incident.email],
            body: message
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logo} />
                <TouchableOpacity onPress={() => {navigation.navigate('Incidents')}}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentPropert, {marginTop: 0}]}>ONG</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}</Text>

                <Text style={styles.incidentPropert}>CASO</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentPropert}>DESCRIÇÃO</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentPropert}>VALOR:</Text>
                <Text style={styles.incidentValue}> 
                    {Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>              
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactBoxTitle}>Salve o dia!</Text>
                <Text style={styles.contactBoxTitle}>Seja o herói desse caso</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendWhatsaap}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}