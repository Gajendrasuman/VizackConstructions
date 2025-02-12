import React from 'react';
import { Text, Heading, Body, Container } from '@react-email/components';

interface EmailProps {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}

export const Email: React.FC<EmailProps> = ({ firstname, lastname, email, phonenumber, subject, message }) => {
  return (
    <Body>
      <Container>
        <Heading>New Message from {firstname} {lastname}</Heading>
        <Text>Email: {email}</Text>
        <Text>Phone Number: {phonenumber}</Text>
        <Text>Subject: {subject}</Text>
        <Text>Message:</Text>
        <Text>{message}</Text>
      </Container>
    </Body>
  );
};