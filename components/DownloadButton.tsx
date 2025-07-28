'use client'

import React from 'react'
import { downloadNewsPaper } from '../lib/api';

const DownloadButton: React.FC = () => {
  const handleDownload = async () => {
    try {
        const date = new Date()
        const formattedDate = date.toISOString().split('T')[0]
        const blob = await downloadNewsPaper()
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `newspaper_${formattedDate}.pdf`
        document.body.appendChild(link)
        link.click()
        link.remove()
        window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Errore durante il download del PDF:', err)
    }
  }

return (
 <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
    <button
      onClick={handleDownload}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Scarica Giornale
    </button>
  </div>
)

}

export default DownloadButton
