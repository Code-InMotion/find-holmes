import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps {
  tagList: string[];
  onChange?: (selectedTags: string[] | string) => void;
  isSingleSelect?: boolean;
}

export default function TagList({
  tagList,
  onChange,
  isSingleSelect,
}: ITagListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    let updatedTags: string[] | string;
    if (isSingleSelect) {
      updatedTags = selectedTags.includes(tag) ? [] : [tag];
    } else {
      updatedTags = selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag];
    }

    setSelectedTags(Array.isArray(updatedTags) ? updatedTags : [updatedTags]);
    if (onChange) onChange(isSingleSelect ? updatedTags[0] : updatedTags);
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
