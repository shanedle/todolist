import React, { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

export default function AddTodo({ addTodo }) {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "You must enter a task!!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  };

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter your task..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Task
        </Button>
      </HStack>
    </form>
  );
}
