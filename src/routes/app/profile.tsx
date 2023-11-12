import { ThemedCard } from "@components/ThemedCard";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "../../components/BasicImage";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppState } from "../root";

type eventType = {
  name: string;
  date: string;
};

type userDataType = {
  name: string;
  phone: string;
  address: string;
  events: eventType[];
};

export default function Function() {
  const { setChosenGroup, setChosenTime, setFirstSessionCompleted } =
    useContext(AppState);
  const [userData, setUserData] = useState<userDataType | null>({
    name: "Tony",
    phone: "123-456-456",
    address: "Kaapelinkatu 15",
    events: [
      { name: "Movie night", date: "Tomorrow, 19:00" },
      { name: "Pool night", date: "12 Nov, 18:00" },
    ],
  });
  const navigate = useNavigate();

  return (
    <>
      {userData ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <ThemedCard>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "space-around" }}
            >
              <BasicImage
                imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhITExIWFRIXEhgXGBgWFRYVFxoXGBcWGxUYFRUYHSggGholGxUXITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0lICUvNS0vLS0tLS0tNS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EADgQAAIBAgMECQMCBQUBAAAAAAABAgMRBCExBRJBUQYiYXGBkaGx8BPB4TLRFCNCUvEHFWKSonL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAiEQEBAAIBAwUBAQAAAAAAAAAAAQIRAxIhMQQiMkFRE2H/2gAMAwEAAhEDEQA/APt4AOgAAAAAAAAAAAAAAAAAAAAAH5KVk29EfpU7axluovH9iGeXTNpYY9V05YzFuby/SiNQruE0+3PuPECPWqZ2Mdyvltxwnhr0wcMDO9OD/wCK9DubpdzbDZq6AAdcAAAAAAAAAAAAAAAAAAAAAAAAZyvtiTnLdeSdrXtoSsLtrhNW7fyZxrdnNX0k16kmnUuuHoYv6Zb3tv8A5Y68NjTqKSundHoy+ExEoO8dORe4THxnlpLk/sXcfNMu18s3Jw3HvPCWAC9SAAAAAOGOxKpwcnyy7zKQqOUt5u7ZP6SYu9op5FVhjDzZ9WWo3cOHTjurGztlZlXvt1WrE6pkiJhKfWlJ8MivKVdh9tRsSf8ALtyZYFT0fd4y7/3LY3cV3hHn801nQAFisAAAAAAAAAAAAAAAAAAAAAAABhNvRca1W391/MiYLFrJavsL7pVQ66lbJxz70Y+tScJZN65HnckuOderxaywjRWaa4y5L5kd1N8cn2P3sVGGqtR/Wlzvm32JNnWWIysm7+XokxZEftqdnbWT6stV5/ktqdRNXTTR83w1eSknnlo/s7ljUxMrxavF31Ts9dH2EsfUXGavdVn6eZXcbec0tXYhVdsUoy3d7PjZaGSltWTluzd7/PsdYxTSv+ppvy09DuXq7fjDH0snyrVf7rT5vS+nAqdo7YlKyhlBvOXG3LxICoKUZ8G7q/aRcNdRaunndPxZXn6jOzSePp8J3ddoVt8/cLSZ5pJ2zXbf2JMJZEMMu/dZl41Hqoss2/I5VKbt1TpUTs7XIsMdKNkrZvztwLcrNOYS/TRdH5q0o8Va/qWxT7FpWk3bJxv43Lg1cPwYOf50ABcqAAAAAAAAAAAAAAAAAAAAAAAAQ9qYXfptWzSuvuYHaGEauj6U0YvEYWUHUjnJRlZXzy4ejMvPj3lbPTZ6ljDbzU821nwV/S6Xi2XmztyV7T+o+MFu5Pt3Vl4sq9p7u+nJNRbs7Xv2rLgXmFwNCMVKlvq/HecllbVPh3d5V4jTyXaXVrxjHqK2XecqcN7jk1pyz/z4HV07vPjx5vjft/BJwMIpqDeWefmn9vIp81zeor/4Zynu5b1737Fqu/Nkim3aW9k4T9Hlr3ex1jJQxFnyt5Xs14M9VIp1pq11JRfk39rHJOzty7udKu3Sq2/Um35rJrvudaWAiqaqJ5tJv54nLC4O0mno4/bTyRaYaNqf0+y3gJNuXLXhyoQvG5+xinocVWhh6X86e6m339ysNmbWwtTKnNeZ3prm/KTThqR8Rh4p34cET6jSI1Wmpa6HZlrsT9WuwpXi33ItCs2LBRTiu8szfw32Rh5vnQAFqoAAAAAAAAAAAAAAAAAAAAAAAAKvbFGyc7cEpeGj9S0OOMpb0JR5pkc8dzSWGWrt8021ThJ2ul3q68T1s9Wyk72WbzeRMq4KKblLO3l3EHEV4QbvLrvgvRHm55V6WM2ucLCLvmt3XV5e1ij2704oYd7sYb7TztkvZ/Y6/wAPWnRrTs4RjCUlvXbk0m/08ND5r01wziqVr7n01JyX9U52e8323eZdxYTLSnly6W+2Z0qw+MqLcm4VbWUZKz9NeJbVq84VE5/p595842ntSli8Nh6tLDfQxGGpxjOrFRjGo4pXcYx5STef91j6RgsdHEYKnUdt904S8Wk7ks+PGbiOHJctVZU6ydi02XTvvN63t7mewsn1Hw/HMuaWOVNO/Ff4M+Fky7rc8bZqPlH+qWJqSqOd3ub7jFaJRTa820TcLSwX1MMsHVlPeob0+tepSqXjk3Za7zVtOozQ7U2NGspRmvqUZtyhKHWlFt3cZR1sno0eOj/Ranhk3Ti03rOpeKX/AGzb1skjR/SdPTrupuGXXv6aONOcqEZRnZ2s7q6usn6ldSxNaEutLeXoS6mIe7GlS/StZcX4cEdMFQ1Tzl7GXLVy7NWFsx9y32NibtcLl0ZLZU9ypuu99664GtN3pr7dMXqZrLYADQzgAAAAAAAAAAAAAAAAAAAAAAAAAA+ddKpfSm456t9ltTM7Je9OU53avyX3Nb/qJG0k7PrRsvuZ/ZlJxityNlrm37uzZ52WHvsejhn7JWowG1YpbrWVvTuK/EbCoyVoTg6d3uwmmt27zjGST6v/ABa48rI41Me423oZWzefscP4nR7riuGiv/20I23Hsl0zLu9VehqnDd3oKmtYQv1rcG7Ky7CHXi6b3NIxSdo6WWmWnA0GE3t3V+f7Mo9r4RxbnJ9XV24JLW/I5bbHcZJVlhcReKfAmVZXg+K4lXsitTcIR3433E1Zq7WV2lxXaWMMbRhu02251G1FKMpXtrfdT3VnqyHTbVuu23vZFbdtZWv8R3xjbd2/nYTqeHUY70kl2ex5w9TfydOSXamS6bJqqrnLdxFoqpa0YJdraJ2EjCGV7yerK/HbOUJb31JqL0jFvUqcVCakpJy3b87+8kSm8fpHtl9tLVoXq05LJ3XN3NKZzo1XVR31txNGbOCe3f6yc976/AAF6gAAAAAAAAAAAAAAAAAAAAAAAAAAGc6a7KdaknH9UXpnmuT7DEzbpRW9Jb3BK7/J9YlG+R806abBmpuSX8pvRaLvRm58de6NXBlv21VYbaUpS/XFebt/5uiywtDfqKTrbyi723ZJLz/Yq8JShBZNru1LvBJKzlfPRWzffyKMfd5XZdvCwr3iruVOCvbrZvPkk9bkDD4lZ9Z1E0r9Rrmve/Ispu66sYJ8d67tb3t7kKcZK/XvzUYpJeIs1duS7mkF9EKDmq1GnuVU97knrdW4Nq/mXOymovNK8W1ok1m7/Yhf7goc5S1tyI6xdVNyUG95uTTay7rEv9WS5XHprVVsRdZTtrornjCzSdt+d+1Oz8yrwu0JSykpRfZZlth3J6vLwOa3dqb7ez9xsovVu/P/ACU1aom7Jxu9Ltq/pmTdp4hLL8evDxIuCoda/mnk/Ffc5le+ncZ220ewMH9OF7daWbLUgbKxKlG3FE828eumaZOTfVdgAJoAAAAAAAAAAAAAAAAAAAAAAAAAAAEfG4WNSLi0nfmSAcHzrauyPpydlnz7Oz5+aim6kZXbu9f/AJXdz5eHNW1nSXHRdXdtord7KhpPJ53zfdrYw546y1G7DLePdJweLTtF8t59n9ifmn4kr6aku9fPYqZwj13e28/TOy9hCu42s+GnmOv9c6PxYRwaTvY7RpZ9hXLazT5nSW2Dm8UvcsVFRdxVxryUeOXzzKCW1L82e5YxvJLt/wAo51/h0X7W0Um7SevP2+cV3npu2V+5/Myo+vO2aeXf3a/OJMws21m8/nzyObd6ftcYHGKElwfoaaLurmNoWdr+DsanZtS8FzWRp4MvpRz4/aUADSzAAAAAAAAAAAAAAAAAAAAAAAAAAAHHG19yEp8k2djO9Oq7jhpJf1ZeHEjldTaWM3dMFjtq/UnKcn2vtOuExqkpPPT3aT9GzOqiml1r8be1/XzPdOs43Sf30Un7pGC3bfJPDSVKl1fm8v8AycHG67SFRxD3eb9r2JlKqrdrI13w8RpO50jQ0uyTRlHsPynWjdpkdO9Vc/o2fidZTS5dl8jzLGR4WeZDnPfbXB/MjlunZjal0sY3KyfZbvy495dbLpPdz15akHZezVk2Tq0Gv0yT7OIxl813KzxHWtk3b2yLzYWI4PijMSm245K2a1d/mZY4Ks4VItX1Vy3jy1ltVyY7x02IPyLufp6LzwAAAAAAAAAAAAAAAAAAAAAAAAAADI/6gu9OMV2muMH00xH8zdd8llyK+W+1ZxT3Pmk6jU3Hhe32JdCGV873Vm/HNHjauDk815cfE5UMU0t3+rLLwer5GKN1/wAT40Hd20avrw0+78glOPefuDnmnq8/Lj4E+UFe67u85cexMv1wjWe9knokiRgabnvXeak4v7HRU+y3z8nKlJwqVHfLJvxX5K9J7/Hd4BK13le37Fxg8JFJPXnxKxYhON5LJ8V795+/xKim799uK4O3PXuOSQu11Vg45rhnbnyK3FbRTVrNsram0JZLe3k9H+VxJ2zcK5O8vz+RcvqJTHXep2yU3m9L8Sxqa691z9ilFWRxqTv+zX34E8ZqK8rutjs6pvU4vwJJS9HsTdSj23RdHpYXeMrzs5rLQACSIAAAAAAAAAAAAAAAAAAAAAAAAYLpqr1u6Py5vT5907VqyfOPkVc3xW8PyZ6ShnoVeP2cmnu5XtmTakY2zZ6o1bq1m+V8vExNk7M61UpZLV5NvgvlyVhdpu6T0Vo+GrffwLaVNSd2uqvmp1hs+lq0N13sgPaDc1rbJ+/vmT09ZNZTsv3+dhMo4aCTe6rWXz5yPThdJWtndELU5pUKNSKcEtGnG64cUyXR2XNpX0fDlctoeF0jsq9rIjp3r/EbDbJSzZa0bRy4/M+4hU8VlZPTgz8VZN5vNcV9yU1ELu+UyTXd6HpSVufiR1Wvp9sn2M9N8bW9iUcqdsvEblVPg+BsYu587UrM2mxMTv012Grgy+mXnx+1iADSzgAAAAAAAAAAAAAAAAAAAAAAAB896ezX14x4uIBVy/FZxfJkqlPNpW72cIYi3Vy8EfoMdbYl4asle+d+ZJ3nJrglbTsAI0eoylFvPqt6eisSadS8e790foIJuqo5ZM/PpO2vH0fA/AJHN1wlFqdtOViT9F/qAEnct7O7laL5ex5jOy7H6AE0XnFVNOBp+ieIvkAXcXzVcs9rTAA2sYAAAAAAAAAAP//Z"
                imageHeight={100}
                borderRadiusIm={5}
              />
              <Stack spacing={2}>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    letterSpacing: "-0.05rem",
                    marginBottom: "1rem",
                  }}
                >
                  {userData.name}
                </Typography>
                <Typography>{userData.address}</Typography>
                <Typography>{userData.phone}</Typography>
              </Stack>
            </Stack>
          </ThemedCard>
          <Stack spacing={2}>
            {userData.events.map((event) => (
              <ThemedButton
                key={event.name}
                variant="contained"
                onClick={() => navigate("/events")}
              >
                <Typography>
                  {event.name} <br />
                  {event.date}
                </Typography>
              </ThemedButton>
            ))}
            <ThemedButton
              variant="outlined"
              onClick={() => {
                setUserData(null);
                setChosenGroup && setChosenGroup(null);
                setChosenTime && setChosenTime(null);
                setFirstSessionCompleted && setFirstSessionCompleted(false);
              }}
            >
              <Typography>Delete account</Typography>
            </ThemedButton>
          </Stack>
        </Box>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
