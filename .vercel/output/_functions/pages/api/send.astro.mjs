import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);
const GET = async () => {
  const { data, error } = await resend.emails.send({
    from: "James <james.pilkington@pilkington.info>",
    to: ["deliverd@resend.dev"],
    subject: "It works!",
    html: "<p>Hello world</p>"
  });
  if (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
