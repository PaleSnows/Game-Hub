import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
  const { data,isLoading,error } = useGenres();
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2} paddingX={1}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
          <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
