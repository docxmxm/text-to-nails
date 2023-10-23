import { Box, Stack, Skeleton ,styled} from "@mui/material";
import './index.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
const Feed = () => {
  const [image, setImage] = useState(null);
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(false);


  async function fetchData() {
    console.log('input: ', input);
    if (!input) return 
    try {
      setLoading(true)
      const response = await fetch('https://api-inference.huggingface.co/models/ringhyacinth/nail-set-diffuser', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: input+' nail' }),
      });

      if (response.ok) {
        // Assuming the response contains an image in binary format
        const blob = await response.blob();
        // Use the blob (e.g., display it on the page)
        setImage(blob);
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }finally {
      setLoading(false)
    }
  }


  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:'2rem'}}>

      <div style={{marginBottom:'1.4rem'}}>
        <TextField  variant="outlined"   placeholder="Keywords generate nails..." onChange={e=>setInput(e.target.value)}   size="small" style={{width:'15rem'}}/>
      </div>
      <div >
        <Button variant="contained" size="small"  onClick={fetchData} loading={loading}>
        {loading?'Computing':"Compute"}
        </Button>
      </div>


      {loading ?<div className="loading-spinner" />: 
        (image && 
        <div >
          <img src={image ? URL.createObjectURL(image) : ''} alt="Generated Image"  style={{width:'20rem',marginTop:'0.6rem'}}/>
        </div>)
      }
    </div>
  );
};

export default Feed;

