// Import necessary Material-UI components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

type BasicImageProps ={
  imageUrl : string
} 

export function BasicImage({imageUrl} : BasicImageProps)  {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"  // Set the height of the image
        image={imageUrl}
      />
    </Card>
  );
};
