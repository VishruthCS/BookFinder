import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// CategoryFilter component displays a row of category buttons
function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="mb-4">
      {/* Horizontal stack of category buttons with spacing */}
      <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap">
        {/* Loop through categories and create a button for each */}
        {categories.map((category) => (
          <Button
            key={category} // Unique key for each button
            // Highlight active category with 'primary', others with 'outline-primary'
            variant={activeCategory === category ? 'primary' : 'outline-primary'}
            // When clicked, call onSelectCategory with the chosen category
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
