import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="mb-4">
      <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'primary' : 'outline-primary'}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default CategoryFilter;