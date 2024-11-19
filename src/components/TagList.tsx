import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps {
  tagList: string[];
  onTagClick: (tag: string) => void;
}

export default function TagList({ tagList, onTagClick }: ITagListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(
      prevTags =>
        prevTags.includes(tag)
          ? prevTags.filter(t => t !== tag) // 이미 선택된 태그면 제거
          : [...prevTags, tag] // 선택되지 않은 태그면 추가
    );
    onTagClick(tag);
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
