// Check books table schema
const { createClient } = require('@vercel/postgres');

async function checkBooksTable() {
  const client = createClient();
  
  try {
    await client.connect();
    
    // Check if books table exists
    const tableExists = await client.sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'books'
      );
    `;
    
    console.log('Books table exists:', tableExists.rows[0].exists);
    
    if (tableExists.rows[0].exists) {
      // Get table schema
      const schema = await client.sql`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns
        WHERE table_name = 'books'
        ORDER BY ordinal_position;
      `;
      
      console.log('Books table schema:');
      schema.rows.forEach(row => {
        console.log(`- ${row.column_name}: ${row.data_type} (nullable: ${row.is_nullable})`);
      });
      
      // Get sample data
      const sampleData = await client.sql`
        SELECT * FROM books LIMIT 3;
      `;
      
      console.log('\nSample data:');
      console.log(sampleData.rows);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.end();
  }
}

checkBooksTable();