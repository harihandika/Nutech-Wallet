import { Box, Button, Input, Text } from "native-base";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tableHeader: {
    backgroundColor: '#c1c1f0',
  },
});
function Transaksi({ navigation }) {
  return (
<DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Top Up</DataTable.Title>
        <DataTable.Title>Jumlah</DataTable.Title>
        <DataTable.Title>Sisa Saldo</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>0</DataTable.Cell>
        <DataTable.Cell>Rp 200.000</DataTable.Cell>
        <DataTable.Cell>Rp 3.000.000</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>0</DataTable.Cell>
        <DataTable.Cell>Rp 300.000</DataTable.Cell>
        <DataTable.Cell>Rp 3.700.000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Rp 1.200.000</DataTable.Cell>
        <DataTable.Cell>Rp 1.000.000</DataTable.Cell>
        <DataTable.Cell>Rp 3.900.000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Rp 2.000.000</DataTable.Cell>
        <DataTable.Cell>Rp 900.000</DataTable.Cell>
        <DataTable.Cell>Rp 5.000.000</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Transaksi;

