import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps {
  tagList: string[];
  onChange?: (selectedTags: string[]) => void;
}

export default function TagList({ tagList, onChange }: ITagListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);
    if (onChange) onChange(updatedTags);
  };

  return (
    <div className="flex gap-[53px]">
      {tagList.map(tag => (
        <TagButton
          key={tag}
          isChecked={selectedTags.includes(tag)}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
