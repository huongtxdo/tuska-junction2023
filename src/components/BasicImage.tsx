// Import necessary Material-UI components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

type BasicImageProps = {
  imageUrl: string;
  imageHeight: number;
  borderRadiusIm: number;
  imageContain?: boolean;
};

export function BasicImage({
  imageUrl,
  imageHeight,
  borderRadiusIm,
  imageContain,
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
        style={{ objectFit: imageContain ? "contain" : "cover" }}
      />
    </Card>
  );
}
