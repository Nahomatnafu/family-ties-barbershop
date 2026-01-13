import { NextRequest, NextResponse } from 'next/server';
import { format } from 'date-fns';
import { barbers, services } from '@/lib/data';

// This is a simplified version. In production, you would:
// 1. Store bookings in a database
// 2. Integrate with Google Calendar API
// 3. Send emails via a service like SendGrid or Resend
// 4. Implement proper authentication and validation

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    const {
      barberId,
      serviceId,
      date,
      time,
      customerName,
      customerEmail,
      customerPhone,
      notes,
    } = bookingData;

    // Validate required fields
    if (!barberId || !serviceId || !date || !time || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find barber and service
    const barber = barbers.find(b => b.id === barberId);
    const service = services.find(s => s.id === serviceId);

    if (!barber || !service) {
      return NextResponse.json(
        { error: 'Invalid barber or service' },
        { status: 400 }
      );
    }

    // Format the booking details
    const bookingDate = new Date(date);
    const formattedDate = format(bookingDate, 'EEEE, MMMM d, yyyy');

    // In production, you would:
    // 1. Save to database
    // 2. Create Google Calendar event
    // 3. Send confirmation emails

    console.log('Booking received:', {
      barber: barber.name,
      service: service.name,
      date: formattedDate,
      time,
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      notes,
    });

    // Simulate email sending (in production, use a real email service)
    const customerEmailContent = `
      Dear ${customerName},

      Your appointment at Family Ties Barbershop has been confirmed!

      Barber: ${barber.name}
      Service: ${service.name}
      Date: ${formattedDate}
      Time: ${time}
      Duration: ${service.duration} minutes
      Price: $${service.price}

      Location:
      407 Range St, North Mankato, Minnesota

      If you need to reschedule or cancel, please call us at 507-720-0522.

      We look forward to seeing you!

      Family Ties Barbershop
    `;

    const barberEmailContent = `
      New Booking Alert!

      Customer: ${customerName}
      Phone: ${customerPhone}
      Email: ${customerEmail}
      Service: ${service.name}
      Date: ${formattedDate}
      Time: ${time}
      Duration: ${service.duration} minutes

      Notes: ${notes || 'None'}
    `;

    // Log email content (in production, actually send these)
    console.log('Customer Email:', customerEmailContent);
    console.log('Barber Email:', barberEmailContent);

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed',
      booking: {
        barber: barber.name,
        service: service.name,
        date: formattedDate,
        time,
      },
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

