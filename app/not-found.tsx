'use client';
import Error from 'next/error';
import React from 'react';

const NotFoundPage = () => {
	return <Error statusCode={404} withDarkMode={false} />;
};

export default NotFoundPage;
