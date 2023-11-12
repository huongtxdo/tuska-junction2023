// Import necessary Material-UI components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

type BasicImageProps = {
  imageUrl: string;
  imageHeight: number;
  borderRadiusIm: number;
};

export function BasicImage({
  imageUrl,
  imageHeight,
  borderRadiusIm,
}: BasicImageProps) {
  return (
    <Card
      sx={{
        borderRadius: borderRadiusIm,
        boxShadow: 0,
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height={imageHeight} // Set the height of the image
        image={imageUrl}
        style={{ objectFit: "contain" }}
      />
    </Card>
  );
}
