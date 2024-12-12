import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';

const BlogsPagination: React.FC = () => {
  return (
    <Pagination>
      <PaginationContent className='list-none'>
        <PaginationItem className='mr-4'>
          <Button variant='default' size='icon' disabled>
            <ChevronLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant='default' size='icon'>
            1
          </Button>
        </PaginationItem>
        <PaginationItem className='ml-4'>
          <Button variant='default' size='icon' disabled>
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogsPagination;
