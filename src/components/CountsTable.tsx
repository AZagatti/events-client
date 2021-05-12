import {
  Table as CTable,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { ISerializedCount } from "../utils/serializeCounts";

interface TableProps {
  title: string;
  counts?: ISerializedCount[];
}

export const CountsTable = ({ title, counts = [] }: TableProps) => {
  return (
    <CTable variant="striped">
      <TableCaption>{title}</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Date</Th>
          <Th>Total</Th>
          <Th>Polling</Th>
          <Th>Silent</Th>
          <Th>Both</Th>
        </Tr>
      </Thead>
      <Tbody>
        {counts.map((count) => (
          <Tr key={count.id}>
            <Td>{count.id}</Td>
            <Td>{count.date}</Td>
            <Td>
              {count.total.value} - {count.total.percentage}
            </Td>
            <Td>
              {count.polling.value} - {count.polling.percentage}
            </Td>
            <Td>
              {count.silent.value} - {count.silent.percentage}
            </Td>
            <Td>
              {count.both.value} - {count.both.percentage}
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>ID</Th>
          <Th>Date</Th>
          <Th>Total</Th>
          <Th>Polling</Th>
          <Th>Silent</Th>
          <Th>Both</Th>
        </Tr>
      </Tfoot>
    </CTable>
  );
};
