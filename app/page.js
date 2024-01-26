'use client';
import React from 'react';
import {Button} from '/components/ui/button.jsx'
import {Input} from '/components/ui/input.jsx'

export default function Home() {
  
  const [url, setUrl] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll need to handle the URL submission here
    console.log('URL submitted:', url);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button type="submit">Generate Summary</Button>
      </form>
    </div>
  );
}
